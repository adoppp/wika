'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Dropzone from 'react-dropzone';
import DatePicker from 'react-datepicker';
import { uk } from 'date-fns/locale';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Loading, Notify } from 'notiflix';

import 'react-datepicker/dist/react-datepicker.css';

import { AdminFormsProps } from '@/app/lib/types/global';
import { cn, loadingOptions, notifyOptions, Svg } from '@/app/lib/utils';
import { transition } from '@/app/lib/constants';
import {
  addReview,
  deleteMedia,
  PROJECT_API,
  ReviewAttributes,
  updateReview,
  uploadMedia,
} from '@/app/lib/api';

export type Form = {
  reviewerName: string;
  date: Date | null;
  reviewUk: string;
  reviewRu: string;
  avatarUrl: string;
  avatarId: string;
};

const initialValues: Form = {
  reviewerName: '',
  date: null,
  reviewUk: '',
  reviewRu: '',
  avatarUrl: '',
  avatarId: '',
};

export default function ReviewForm({
  action,
  values,
}: Readonly<AdminFormsProps<Form>>) {
  const [form, setForm] = useState(values || initialValues);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [file, setFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | undefined>();

  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const token = (session?.user as any)?.jwt;
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    if (
      !form.reviewerName ||
      !form.date ||
      !form.reviewUk ||
      !form.reviewRu ||
      (!form.avatarUrl && !form.avatarId && !file) ||
      (JSON.stringify(values) === JSON.stringify(form) && !file)
    ) {
      setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
  }, [form, values, file]);

  const { register, handleSubmit } = useForm<Form>();

  const { mutateAsync: createAsync } = useMutation({
    mutationFn: addReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['reviews'],
      });
    },
  });

  const { mutateAsync: updateAsync } = useMutation({
    mutationFn: updateReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['reviews'],
      });
    },
  });

  let loadingMessage = '';
  let successMessage = '';

  switch (action) {
    case 'create':
      loadingMessage = 'Додаємо новий відгук';
      successMessage = 'Відгук успішно додано';
      break;

    case 'update':
      loadingMessage = 'Редагуємо відгук';
      successMessage = 'Відгук успішно відредаговано';
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
          await createReview(data);
          break;

        case 'update':
          await editReview(data);
          break;

        default:
          break;
      }

      Notify.success(successMessage, notifyOptions);

      setTimeout(() => {
        router.replace('/admin/reviews');
        router.refresh();
      }, 2000);
    } catch (error) {
      Notify.failure(`Виникла помилка. ${error}`, notifyOptions);
    } finally {
      Loading.remove();
    }
  }

  async function createReview(formData: Form) {
    let data = {
      reviewerName: formData.reviewerName,
      date: form.date as Date,
      avatarUrl: '',
      avatarId: '',
    };

    if (file) {
      const formDataAvatar = new FormData();
      formDataAvatar.append('files', file, file.name);

      const response = await uploadMedia(formDataAvatar, token);
      const { url, id } = response[0];

      data.avatarUrl = url;
      data.avatarId = `${id}`;
    }

    const { id: ruLocaleId } = await createAsync({
      data: {
        review: formData.reviewRu,
        locale: 'ru',
        ...data,
      },
      token,
    });

    await createAsync({
      data: {
        review: formData.reviewUk,
        ruLocaleId: `${ruLocaleId}`,
        ...data,
      },
      token,
    });
  }

  async function editReview(formData: Form) {
    let data = {
      reviewerName: formData.reviewerName,
      date: form.date as Date,
      avatarUrl: (values as Form).avatarUrl,
      avatarId: (values as Form).avatarId,
    };

    if (file) {
      const formDataAvatar = new FormData();
      formDataAvatar.append('files', file, file.name);

      const [{ value: response }, _] = (await Promise.allSettled([
        uploadMedia(formDataAvatar, token),
        deleteMedia({ id: data.avatarId, token }),
      ])) as {
        status: 'fulfilled' | 'rejected';
        value: { url: string; id: number }[];
      }[];

      const { url, id } = response[0];

      data.avatarUrl = url;
      data.avatarId = `${id}`;
    }

    const { attributes }: { attributes: ReviewAttributes } = await updateAsync({
      id: id as string,
      data: {
        review: formData.reviewUk,
        ...data,
      },
      token,
    });

    await updateAsync({
      id: attributes.ruLocaleId as string,
      data: {
        review: formData.reviewUk,
        locale: 'ru',
        ...data,
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
          <input
            {...register('reviewerName')}
            type="text"
            required
            value={form.reviewerName}
            onInput={handleInput}
            disabled={action === 'read'}
            placeholder="Ім’я клієнта*"
            className="wk_w-[100%] wk_px-[20px] wk_py-[12px] wk_rounded-[12px] wk_bg-gray_50 placeholder:wk_text-gray_400 focus:wk_outline-[#04D9FF]"
          />

          <div>
            <DatePicker
              selected={form.date}
              onChange={(date: Date) => setForm(prev => ({ ...prev, date }))}
              disabled={action === 'read'}
              placeholderText="дд.мм.рррр *"
              className="wk_block wk_w-[calc((100vw-276px)/2)] wk_px-[20px] wk_py-[12px] wk_rounded-[12px] wk_bg-gray_50 placeholder:wk_text-gray_400 focus:wk_outline-[#04D9FF]"
              locale={uk}
              dateFormat="dd.MM.yyyy"
            />
          </div>
        </div>

        <div className="wk_flex wk_justify-between wk_gap-[12px] wk_mb-[12px]">
          <textarea
            {...register('reviewUk')}
            cols={30}
            rows={8}
            required
            value={form.reviewUk}
            onInput={handleInput}
            disabled={action === 'read'}
            placeholder="Відгук (Укр)*"
            className="wk_w-[100%] wk_px-[20px] wk_py-[12px] wk_rounded-[12px] wk_bg-gray_50 placeholder:wk_text-gray_400 wk_resize-none wk_font-inherit wk_text-inherit focus:wk_outline-[#04D9FF]"
          ></textarea>

          <textarea
            {...register('reviewRu')}
            cols={30}
            rows={8}
            required
            value={form.reviewRu}
            onInput={handleInput}
            disabled={action === 'read'}
            placeholder="Відгук (Рос)*"
            className="wk_w-[100%] wk_px-[20px] wk_py-[12px] wk_rounded-[12px] wk_bg-gray_50 placeholder:wk_text-gray_400 wk_resize-none wk_font-inherit wk_text-inherit focus:wk_outline-[#04D9FF]"
          ></textarea>
        </div>

        <label className="wk_w-[100%] wk_text-[14px]">
          Аватар *
          <Dropzone
            onDrop={acceptedFiles => {
              setFile(acceptedFiles[0]);
              setPreview(URL.createObjectURL(acceptedFiles[0]));
            }}
            accept={{ 'image/*': [] }}
          >
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  className={cn(
                    'wk_relative wk_flex wk_justify-center wk_items-center wk_h-[340px] wk_max-h-[calc(100vh-492px)] wk_mt-[8px] wk_text-[14px] wk_text-gray_400 wk_border-[2px] wk_border-dashed wk_rounded-[8px] wk_cursor-pointer wk_transition-colors hover:wk_text-gray_700 focus:wk_text-gray_700',
                    isDragActive
                      ? 'wk_border-[#535A62] wk_bg-gray_100'
                      : 'wk_border-gray_200 wk_bg-gray_50',
                    transition,
                  )}
                >
                  <input
                    {...getInputProps({
                      type: 'file',
                      name: 'reviewerAvatar',
                    })}
                  />

                  {!values?.avatarUrl || preview ? (
                    preview ? (
                      <Image
                        src={preview}
                        alt="Reviewer avatar preview"
                        fill={true}
                        onLoad={() => {
                          URL.revokeObjectURL(preview);
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
                      src={`${PROJECT_API}${values.avatarUrl}`}
                      alt="Reviewer avatar"
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

      {action !== 'read' && (
        <button
          disabled={isBtnDisabled}
          className={cn(
            'wk_w-[100%] wk_rounded-14 wk_p-[16px] wk_text-th_white wk_bg-th_accent wk_transition hover:wk_text-th_black hover:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_text-th_black focus:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_outline-none disabled:wk_text-[#535A62] disabled:wk_cursor-not-allowed disabled:wk_bg-th_black',
            transition,
          )}
        >
          {action === 'create'
            ? 'Додати відгук'
            : action === 'update'
            ? 'Редагувати відгук'
            : ''}
        </button>
      )}
    </form>
  );
}
