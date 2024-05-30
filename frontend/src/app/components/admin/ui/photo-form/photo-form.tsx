'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Dropzone from 'react-dropzone';

import { AdminFormsProps } from '@/app/lib/types/global';
import { cn, loadingOptions, notifyOptions, Svg } from '@/app/lib/utils';
import { transition } from '@/app/lib/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import {
  addPhoto,
  deleteMedia,
  PhotosAttributes,
  PROJECT_API,
  updatePhoto,
  uploadMedia,
} from '@/app/lib/api';
import { Loading, Notify } from 'notiflix';
import Image from 'next/image';

export type Form = {
  descriptionUk: string;
  descriptionRu: string;
  beforeUrl: string;
  beforeMediaId: string;
  afterUrl: string;
  afterMediaId: string;
};

const initialValues: Form = {
  descriptionUk: '',
  descriptionRu: '',
  beforeUrl: '',
  beforeMediaId: '',
  afterUrl: '',
  afterMediaId: '',
};

export default function PhotoForm({
  action,
  values,
}: Readonly<AdminFormsProps<Form>>) {
  const [form, setForm] = useState(values || initialValues);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [fileBefore, setFileBefore] = useState<File | undefined>();
  const [previewBefore, setPreviewBefore] = useState<string | undefined>();
  const [fileAfter, setFileAfter] = useState<File | undefined>();
  const [previewAfter, setPreviewAfter] = useState<string | undefined>();

  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const token = (session?.user as any)?.jwt;
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    if (
      !form.descriptionUk ||
      !form.descriptionRu ||
      (!form.beforeUrl && !fileBefore) ||
      (!form.afterUrl && !fileAfter) ||
      (JSON.stringify(values) === JSON.stringify(form) && !fileBefore) ||
      (JSON.stringify(values) === JSON.stringify(form) && !fileAfter)
    ) {
      setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
  }, [form, values, fileBefore, fileAfter]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>();

  const { mutateAsync: createAsync } = useMutation({
    mutationFn: addPhoto,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['photos'],
      });
    },
  });

  const { mutateAsync: updateAsync } = useMutation({
    mutationFn: updatePhoto,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['photos'],
      });
    },
  });

  let loadingMessage = '';
  let successMessage = '';

  switch (action) {
    case 'create':
      loadingMessage = 'Додаємо новий кейс';
      successMessage = 'Кейс успішно додано';
      break;

    case 'update':
      loadingMessage = 'Редагуємо кейс';
      successMessage = 'Кейс успішно відредаговано';
      break;

    default:
      break;
  }

  const handleInput = (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>,
  ): void => {
    setForm(values => ({
      ...values,
      [(e.target as any)?.name]: (e.target as any)?.value,
    }));
  };

  async function onSubmit(data: Form) {
    Loading.circle(loadingMessage, loadingOptions);

    try {
      switch (action) {
        case 'create':
          await createPhoto(data);
          break;

        case 'update':
          await editPhoto(data);
          break;

        default:
          break;
      }

      Notify.success(successMessage, notifyOptions);

      setTimeout(() => {
        router.replace('/admin/photos');
        router.refresh();
      }, 2000);
    } catch (error) {
      Notify.failure(`Виникла помилка. ${error}`, notifyOptions);
    } finally {
      Loading.remove();
    }
  }

  async function createPhoto(formData: Form) {
    let data = {
      beforeUrl: '',
      beforeMediaId: '',
      afterUrl: '',
      afterMediaId: '',
    };

    const formDataBefore = new FormData();
    const formDataAfter = new FormData();

    formDataBefore.append(
      'files',
      fileBefore as File,
      (fileBefore as File).name,
    );
    formDataAfter.append('files', fileAfter as File, (fileAfter as File).name);

    const [{ value: responseBefore }, { value: responseAfter }] =
      (await Promise.allSettled([
        uploadMedia(formDataBefore, token),
        uploadMedia(formDataAfter, token),
      ])) as {
        status: 'fulfilled' | 'rejected';
        value: { url: string; id: number }[];
      }[];

    const { url: beforeUrl, id: beforeMediaId } = responseBefore[0];
    const { url: afterUrl, id: afterMediaId } = responseAfter[0];

    data = {
      beforeUrl,
      beforeMediaId: `${beforeMediaId}`,
      afterUrl,
      afterMediaId: `${afterMediaId}`,
    };

    const { id: ruLocaleId } = await createAsync({
      data: { description: formData.descriptionRu, locale: 'ru', ...data },
      token,
    });

    await createAsync({
      data: {
        description: formData.descriptionUk,
        ruLocaleId: `${ruLocaleId}`,
        ...data,
      },
      token,
    });
  }

  async function editPhoto(data: Form) {
    let beforeUrl = (values as Form).beforeUrl;
    let beforeMediaId = (values as Form).beforeMediaId;
    let afterUrl = (values as Form).afterUrl;
    let afterMediaId = (values as Form).afterMediaId;

    if (fileBefore || fileAfter) {
      const formDataBefore = new FormData();
      const formDataAfter = new FormData();

      if (fileBefore) {
        formDataBefore.append('files', fileBefore, fileBefore.name);
      }

      if (fileAfter) {
        formDataAfter.append('files', fileAfter, fileAfter.name);
      }

      const [
        { value: uploadResponseBefore },
        _,
        { value: uploadResponseAfter },
        __,
      ] = (await Promise.allSettled([
        fileBefore && uploadMedia(formDataBefore, token),
        fileBefore && deleteMedia({ id: beforeMediaId, token }),
        fileAfter && uploadMedia(formDataAfter, token),
        fileAfter && deleteMedia({ id: afterMediaId, token }),
      ])) as {
        status: 'fulfilled' | 'rejected';
        value: { url: string; id: number }[];
      }[];

      if (fileBefore) {
        beforeUrl = uploadResponseBefore[0].url;
        beforeMediaId = `${uploadResponseBefore[0].id}`;
      }

      if (fileAfter) {
        afterUrl = uploadResponseAfter[0].url;
        afterMediaId = `${uploadResponseAfter[0].id}`;
      }
    }

    const { attributes }: { attributes: PhotosAttributes } = await updateAsync({
      id: id as string,
      data: {
        description: data.descriptionUk,
        beforeUrl,
        beforeMediaId,
        afterUrl,
        afterMediaId,
      },
      token,
    });

    await updateAsync({
      id: attributes.ruLocaleId as string,
      data: {
        description: data.descriptionRu,
        beforeUrl,
        beforeMediaId,
        afterUrl,
        afterMediaId,
        locale: 'ru',
      },
      token,
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="wk_flex wk_flex-col wk_h-[calc(100vh-102px)] wk_justify-between"
    >
      <div>
        <div className="wk_flex wk_justify-between wk_gap-[12px] wk_mb-[12px]">
          <textarea
            {...register('descriptionUk')}
            cols={30}
            rows={9}
            required
            value={form.descriptionUk}
            onInput={handleInput}
            disabled={action === 'read'}
            placeholder="Опис (Укр)*"
            className="wk_w-[100%] wk_px-[20px] wk_py-[12px] wk_rounded-[12px] wk_bg-gray_50 placeholder:wk_text-gray_400 wk_resize-none wk_font-inherit wk_text-inherit focus:wk_outline-[#04D9FF]"
          ></textarea>

          <textarea
            {...register('descriptionRu')}
            cols={30}
            rows={9}
            required
            value={form.descriptionRu}
            onInput={handleInput}
            disabled={action === 'read'}
            placeholder="Опис (Рос)*"
            className="wk_w-[100%] wk_px-[20px] wk_py-[12px] wk_rounded-[12px] wk_bg-gray_50 placeholder:wk_text-gray_400 wk_resize-none wk_font-inherit wk_text-inherit focus:wk_outline-[#04D9FF]"
          ></textarea>
        </div>

        <div className="wk_flex wk_justify-between wk_gap-[12px]">
          <label className="wk_w-[100%] wk_text-[14px]">
            Фото до *
            <Dropzone
              onDrop={acceptedFiles => {
                setFileBefore(acceptedFiles[0]);
                setPreviewBefore(URL.createObjectURL(acceptedFiles[0]));
              }}
              accept={{ 'image/*': [] }}
              disabled={action === 'read'}
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
                        name: 'photoBefore',
                      })}
                    />
                    {previewBefore || !values?.beforeUrl ? (
                      previewBefore ? (
                        <Image
                          src={previewBefore}
                          alt="Before preview"
                          fill={true}
                          onLoad={() => {
                            URL.revokeObjectURL(previewBefore);
                          }}
                          className="wk_object-contain"
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
                        src={`${PROJECT_API}${values?.beforeUrl}`}
                        alt="Before image"
                        fill={true}
                        className="wk_object-contain"
                      />
                    )}
                  </div>
                );
              }}
            </Dropzone>
          </label>

          <label className="wk_w-[100%] wk_text-[14px]">
            Фото після *
            <Dropzone
              onDrop={acceptedFiles => {
                setFileAfter(acceptedFiles[0]);
                setPreviewAfter(URL.createObjectURL(acceptedFiles[0]));
              }}
              accept={{ 'image/*': [] }}
              disabled={action === 'read'}
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
                        name: 'photoAfter',
                      })}
                    />
                    {previewAfter || !values?.afterUrl ? (
                      previewAfter ? (
                        <Image
                          src={previewAfter}
                          alt="After preview"
                          fill={true}
                          onLoad={() => {
                            URL.revokeObjectURL(previewAfter);
                          }}
                          className="wk_object-contain"
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
                        src={`${PROJECT_API}${values?.afterUrl}`}
                        alt="Before image"
                        fill={true}
                        className="wk_object-contain"
                      />
                    )}
                  </div>
                );
              }}
            </Dropzone>
          </label>
        </div>
      </div>

      {action !== 'read' && (
        <button
          disabled={isBtnDisabled}
          className={cn(
            'wk_w-[100%] wk_rounded-14 wk_p-[16px] wk_text-th_white wk_bg-th_accent wk_transition hover:wk_text-th_black hover:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_text-th_black focus:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_outline-none disabled:wk_text-[#535A62] disabled:wk_cursor-not-allowed disabled:wk_bg-th_black',
            transition,
          )}
        >
          {action === 'create'
            ? 'Додати послугу'
            : action === 'update'
            ? 'Редагувати послугу'
            : ''}
        </button>
      )}
    </form>
  );
}
