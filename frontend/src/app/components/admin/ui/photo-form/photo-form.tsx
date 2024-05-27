'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Dropzone from 'react-dropzone';

import { AdminFormsProps } from '@/app/lib/types/global';
import { cn, Svg } from '@/app/lib/utils';
import { transition } from '@/app/lib/constants';

export type Form = {
  descriptionUk: string;
  descriptionRu: string;
};

const initialValues: Form = {
  descriptionUk: '',
  descriptionRu: '',
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

  useEffect(() => {
    if (
      !form.descriptionUk ||
      !form.descriptionRu ||
      JSON.stringify(values) === JSON.stringify(form)
    ) {
      setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
  }, [form, values]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>();

  const handleInput = (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>,
  ): void => {
    setForm(values => ({
      ...values,
      [(e.target as any)?.name]: (e.target as any)?.value,
    }));
  };

  function onSubmit() {}

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
            >
              {({ getRootProps, getInputProps, isDragActive }) => {
                return (
                  <div
                    {...getRootProps()}
                    className={cn(
                      'wk_flex wk_justify-center wk_items-center wk_h-[380px] wk_max-h-[calc(100vh-440px)] wk_mt-[8px] wk_text-[14px] wk_text-gray_400 wk_border-[2px] wk_border-dashed wk_rounded-[8px] wk_cursor-pointer wk_transition-colors hover:wk_text-gray_700 focus:wk_text-gray_700',
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
                        required: true,
                      })}
                    />
                    <span>
                      <Svg
                        id="upload"
                        className="wk_mx-auto wk_mb-[12px] wk_border-none"
                      />
                      Натисніть, щоб завантажити або перетягніть відповідний
                      файл
                    </span>
                  </div>
                );
              }}
            </Dropzone>
          </label>

          <label className="wk_w-[100%] wk_text-[14px]">
            Фото після *
            <Dropzone
              onDrop={acceptedFiles => {
                setFileBefore(acceptedFiles[0]);
                setPreviewBefore(URL.createObjectURL(acceptedFiles[0]));
              }}
              accept={{ 'image/*': [] }}
            >
              {({ getRootProps, getInputProps, isDragActive }) => {
                return (
                  <div
                    {...getRootProps()}
                    className={cn(
                      'wk_flex wk_justify-center wk_items-center wk_h-[380px] wk_max-h-[calc(100vh-440px)] wk_mt-[8px] wk_text-[14px] wk_text-gray_400 wk_border-[2px] wk_border-dashed wk_rounded-[8px] wk_cursor-pointer wk_transition-colors hover:wk_text-gray_700 focus:wk_text-gray_700',
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
                        required: true,
                      })}
                    />
                    <span>
                      <Svg
                        id="upload"
                        className="wk_mx-auto wk_mb-[12px] wk_border-none"
                      />
                      Натисніть, щоб завантажити або перетягніть відповідний
                      файл
                    </span>
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
