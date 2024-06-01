'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import Dropzone from 'react-dropzone';
import { Loading, Notify } from 'notiflix';

import {
  deleteMedia,
  PROJECT_API,
  updateVideo,
  uploadMedia,
  VideoAttributes,
} from '@/app/lib/api';
import { transition } from '@/app/lib/constants';
import { cn, loadingOptions, notifyOptions, Svg } from '@/app/lib/utils';

interface EditVideoFormProps {
  values: VideoAttributes;
}

export default function EditVideoForm({
  values,
}: Readonly<EditVideoFormProps>) {
  const [file, setFile] = useState<File | undefined>();
  const [posterFile, setPosterFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | undefined>();
  const [posterPreview, setPosterPreview] = useState<string | undefined>();

  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const token = (session?.user as any)?.jwt;
  const router = useRouter();

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

    Loading.circle('Оновлюємо відео', loadingOptions);

    try {
      let data: VideoAttributes = {
        url: values.url,
        mediaId: values.mediaId,
        posterUrl: values.posterUrl,
        posterMediaId: values.posterMediaId,
      };

      const videoFormData = new FormData();
      const posterFormData = new FormData();

      if (file) {
        videoFormData.append('files', file, file.name);
      }

      if (posterFile) {
        posterFormData.append('files', posterFile, posterFile.name);
      }

      const [
        { value: uploadVideoResponse },
        _,
        { value: uploadPosterResponse },
        __,
      ] = (await Promise.allSettled([
        file && uploadMedia(videoFormData, token),
        file && deleteMedia({ id: values.mediaId, token }),
        posterFile && uploadMedia(posterFormData, token),
        posterFile && deleteMedia({ id: values.posterMediaId, token }),
      ])) as {
        status: 'fulfilled' | 'rejected';
        value: { url: string; id: number }[];
      }[];

      if (file) {
        data.url = uploadVideoResponse[0].url;
        data.mediaId = `${uploadVideoResponse[0].id}`;
      }

      if (posterFile) {
        data.posterUrl = uploadPosterResponse[0].url;
        data.posterMediaId = `${uploadPosterResponse[0].id}`;
      }

      await updateAsync({ data, token });

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
    <form
      onSubmit={handleSubmit}
      className="wk_flex wk_flex-col wk_h-[calc(100vh-102px)] wk_justify-between"
    >
      <div className="wk_flex wk_justify-between wk_gap-[12px]">
        <label className="wk_w-[100%] wk_text-[14px]">
          Відео *
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
                    'wk_flex wk_justify-center wk_items-center wk_h-[380px] wk_max-h-[calc(100vh-440px)] wk_mt-[8px] wk_mb-[12px] wk_text-[14px] wk_text-gray_400 wk_border-[2px] wk_border-dashed wk_rounded-[8px] wk_cursor-pointer wk_transition-colors hover:wk_text-gray_700 focus:wk_text-gray_700',
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
                  {file || !values?.url ? (
                    file ? (
                      <video
                        controls
                        className="wk_h-[376px] wk_max-h-[calc(100vh-436px)] wk_rounded-[8px]"
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
                        Натисніть, щоб завантажити або перетягніть відповідний
                        файл
                      </span>
                    )
                  ) : (
                    <video
                      controls
                      className="wk_h-[376px] wk_max-h-[calc(100vh-436px)] wk_rounded-[8px]"
                      onClick={e => e.stopPropagation()}
                    >
                      <source src={`${PROJECT_API}${values?.url}`} />
                    </video>
                  )}
                </div>
              );
            }}
          </Dropzone>
        </label>

        <label className="wk_w-[100%] wk_text-[14px]">
          Постер для відео *
          <Dropzone
            onDrop={acceptedFiles => {
              setPosterFile(acceptedFiles[0]);
              setPosterPreview(URL.createObjectURL(acceptedFiles[0]));
            }}
            accept={{ 'image/*': [] }}
          >
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  className={cn(
                    'wk_relative wk_flex wk_justify-center wk_items-center wk_h-[380px] wk_max-h-[calc(100vh-440px)] wk_mt-[8px] wk_text-[14px] wk_text-gray_400 wk_border-[2px] wk_border-dashed wk_rounded-[8px] wk_cursor-pointer wk_transition-colors hover:wk_text-gray_700 focus:wk_text-gray_700',
                    isDragActive
                      ? 'wk_border-[#535A62] wk_bg-gray_100'
                      : 'wk_border-gray_200 wk_bg-gray_50',
                    transition,
                  )}
                >
                  <input
                    {...getInputProps({
                      type: 'file',
                      name: 'poster',
                    })}
                  />
                  {posterPreview || !values?.posterUrl ? (
                    posterPreview ? (
                      <Image
                        src={posterPreview}
                        alt="Poster preview"
                        fill={true}
                        onLoad={() => {
                          URL.revokeObjectURL(posterPreview);
                        }}
                        className="wk_object-contain wk_rounded-[8px]"
                      />
                    ) : (
                      <span>
                        <Svg
                          id="upload"
                          className="wk_mx-auto wk_mb-[12px] wk_border-none"
                        />
                        Натисніть, щоб завантажити або перетягніть відповідний
                        файл
                      </span>
                    )
                  ) : (
                    <Image
                      src={`${PROJECT_API}${values?.posterUrl}`}
                      alt="Poster"
                      fill={true}
                      className="wk_object-contain wk_rounded-[8px]"
                    />
                  )}
                </div>
              );
            }}
          </Dropzone>
        </label>
      </div>

      <button
        className={cn(
          'wk_w-[100%] wk_rounded-14 wk_p-[16px] wk_text-th_white wk_bg-th_accent wk_transition hover:wk_text-th_black hover:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_text-th_black focus:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_outline-none disabled:wk_text-[#535A62] disabled:wk_cursor-not-allowed disabled:wk_bg-th_black',
          transition,
        )}
        disabled={!file && !posterFile}
      >
        Зберегти зміни
      </button>
    </form>
  );
}
