'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { AdminFormsProps } from '@/app/lib/types/global';
import { cn } from '@/app/lib/utils';
import { transition } from '@/app/lib/constants';

export type Form = {
  titleUk: string;
  titleRu: string;
  descriptionUk: string;
  descriptionRu: string;
};

const initialValues: Form = {
  titleUk: '',
  titleRu: '',
  descriptionUk: '',
  descriptionRu: '',
};

export default function ServiceForm({
  action,
  values,
}: Readonly<AdminFormsProps<Form>>) {
  const [form, setForm] = useState(values || initialValues);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    if (
      !form.titleUk ||
      !form.titleRu ||
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
          <input
            {...register('titleUk')}
            type="text"
            required
            value={form.titleUk}
            onInput={handleInput}
            disabled={action === 'read'}
            placeholder="Заголовок (Укр)*"
            className="wk_w-[100%] wk_px-[20px] wk_py-[12px] wk_rounded-[12px] wk_bg-gray_50 placeholder:wk_text-gray_400 focus:wk_outline-[#04D9FF]"
          />

          <input
            type="text"
            {...register('titleRu')}
            required
            value={form.titleRu}
            onInput={handleInput}
            disabled={action === 'read'}
            placeholder="Заголовок (Рос)*"
            className="wk_w-[100%] wk_px-[20px] wk_py-[12px] wk_rounded-[12px] wk_bg-gray_50 placeholder:wk_text-gray_400 focus:wk_outline-[#04D9FF]"
          />
        </div>

        <div className="wk_flex wk_justify-between wk_gap-[12px]">
          <textarea
            {...register('descriptionUk')}
            cols={30}
            rows={10}
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
            rows={10}
            required
            value={form.descriptionRu}
            onInput={handleInput}
            disabled={action === 'read'}
            placeholder="Опис (Рос)*"
            className="wk_w-[100%] wk_px-[20px] wk_py-[12px] wk_rounded-[12px] wk_bg-gray_50 placeholder:wk_text-gray_400 wk_resize-none wk_font-inherit wk_text-inherit focus:wk_outline-[#04D9FF]"
          ></textarea>
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
