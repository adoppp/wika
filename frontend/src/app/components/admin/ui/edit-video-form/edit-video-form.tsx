'use client';

import {
  deleteMedia,
  updateVideo,
  uploadMedia,
  VideoAttributes,
  VideoResponse,
} from '@/app/lib/api';
import { transition } from '@/app/lib/constants';
import { cn, loadingOptions, notifyOptions, Svg } from '@/app/lib/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Loading, Notify } from 'notiflix';
import { FormEvent, useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';

interface EditVideoFromProps {}

export default function EditVideoFrom(props: Readonly<EditVideoFromProps>) {
  const [file, setFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | undefined>();

  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const token = (session?.user as any)?.jwt;
  const router = useRouter();

  const video = queryClient.getQueryData(['video']) as VideoResponse;

  useEffect(() => {
    if (file) {
      const blobUrl = URL.createObjectURL(file);
      setPreview(blobUrl);
    }
  }, [file]);

  const { mutateAsync: updateAsync } = useMutation({
    mutationFn: updateVideo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['video'],
      });
    },
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    Loading.circle('Оеовлюємо відео', loadingOptions);

    try {
      let data: VideoAttributes = { url: '', mediaId: '' };

      if (file) {
        const formData = new FormData();
        formData.append('files', file, file.name);

        const response = await uploadMedia(formData, token);
        const { url, id } = response[0];

        data.url = url;
        data.mediaId = `${id}`;
      }

      await updateAsync({ data, token });
      await deleteMedia({ id: video.attributes.mediaId, token });

      Notify.success('Відео успішно оновленно', notifyOptions);

      setTimeout(() => {
        router.replace('/admin/video');
        router.refresh();
      }, 2000);
    } catch (error) {
      Notify.failure(`Виникла помилка. ${error}`, notifyOptions);
    } finally {
      Loading.remove();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Dropzone
        onDrop={acceptedFiles => {
          setFile(acceptedFiles[0]);
          setPreview(URL.createObjectURL(acceptedFiles[0]));
        }}
        accept={{ 'video/*': [] }}
      >
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <div
              {...getRootProps()}
              className={cn(
                'wk_flex wk_justify-center wk_items-center wk_h-[calc(100vh-170px)] wk_mb-[12px] wk_text-[14px] wk_text-gray_400 wk_border-[2px] wk_border-dashed wk_rounded-[8px] wk_cursor-pointer wk_transition-colors hover:wk_text-gray_700 focus:wk_text-gray_700',
                isDragActive
                  ? 'wk_border-[#535A62] wk_bg-gray_100'
                  : 'wk_border-gray_200 wk_bg-gray_50',
                transition,
              )}
            >
              <input
                {...getInputProps({
                  type: 'file',
                  name: 'heroVideo',
                })}
              />
              {file ? (
                <video
                  controls
                  className="wk_h-[calc(100vh-176px)] wk_rounded-[8px]"
                  onClick={e => e.stopPropagation()}
                >
                  <source src={preview} type={file.type} />
                </video>
              ) : (
                <span>
                  <Svg
                    id="upload"
                    className="wk_mx-auto wk_mb-[12px] wk_border-none"
                  />
                  Натисніть, щоб завантажити або перетягніть відповідний файл
                </span>
              )}
            </div>
          );
        }}
      </Dropzone>

      <button
        className={cn(
          'wk_w-[100%] wk_rounded-14 wk_p-[16px] wk_text-th_white wk_bg-th_accent wk_transition hover:wk_text-th_black hover:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_text-th_black focus:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_outline-none disabled:wk_text-[#535A62] disabled:wk_cursor-not-allowed disabled:wk_bg-th_black',
          transition,
        )}
        disabled={!file}
      >
        Зберегти зміни
      </button>
    </form>
  );
}
