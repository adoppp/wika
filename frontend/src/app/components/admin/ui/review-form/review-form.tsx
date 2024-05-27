'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Dropzone from 'react-dropzone';
import DatePicker from 'react-datepicker';
import { uk } from 'date-fns/locale';

import 'react-datepicker/dist/react-datepicker.css';

import { AdminFormsProps } from '@/app/lib/types/global';
import { cn, Svg } from '@/app/lib/utils';
import { transition } from '@/app/lib/constants';
import { format } from 'date-fns';

export type Form = {
  reviewerName: string;
  date: string;
  reviewUk: string;
  reviewRu: string;
};

const initialValues: Form = {
  reviewerName: '',
  date: '',
  reviewUk: '',
  reviewRu: '',
};

export default function ReviewForm({
  action,
  values,
}: Readonly<AdminFormsProps<Form>>) {
  const [form, setForm] = useState(values || initialValues);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [file, setFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | undefined>();

  useEffect(() => {
    if (
      !form.reviewerName ||
      !form.date ||
      !form.reviewUk ||
      !form.reviewRu ||
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
              selected={
                form.date
                  ? new Date(
                      +form.date.split('-')[0],
                      +form.date.split('-')[1] + 1,
                      +form.date.split('-')[2],
                    )
                  : null
              }
              onChange={(date: Date) =>
                setForm(prev => ({ ...prev, date: format(date, 'yyyy-MM-dd') }))
              }
              disabled={action === 'read'}
              placeholderText="дд.мм.рррр *"
              className="wk_block wk_w-[calc((100vw-276px)/2)] wk_px-[20px] wk_py-[12px] wk_rounded-[12px] wk_bg-gray_50 placeholder:wk_text-gray_400 focus:wk_outline-[#04D9FF]"
              locale={uk}
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
                    'wk_flex wk_justify-center wk_items-center wk_h-[340px] wk_max-h-[calc(100vh-492px)] wk_mt-[8px] wk_text-[14px] wk_text-gray_400 wk_border-[2px] wk_border-dashed wk_rounded-[8px] wk_cursor-pointer wk_transition-colors hover:wk_text-gray_700 focus:wk_text-gray_700',
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

                  {action !== 'read' && (
                    <span>
                      <Svg
                        id="upload"
                        className="wk_mx-auto wk_mb-[12px] wk_border-none"
                      />
                      Натисніть, щоб завантажити або перетягніть відповідний
                      файл
                    </span>
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
            ? 'Додати послугу'
            : action === 'update'
            ? 'Редагувати послугу'
            : ''}
        </button>
      )}
    </form>
  );
}
