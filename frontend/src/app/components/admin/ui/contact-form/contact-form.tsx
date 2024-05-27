'use client';

import { transition } from '@/app/lib/constants';
import { cn } from '@/app/lib/utils';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

export type Form = {
  link: string;
};

export default function ContactForm() {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>();

  const handleInput = (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>,
  ): void => {
    setInputValue((e.target as any)?.value);
  };

  function onSubmit() {}

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="wk_flex wk_flex-col wk_h-[calc(100vh-102px)] wk_justify-between"
    >
      <input
        {...register(`link`)}
        type="text"
        required
        value={'form.reviewerName'}
        onInput={handleInput}
        placeholder="Нікнейм акаунту"
        className="wk_w-[50%] wk_px-[20px] wk_py-[12px] wk_rounded-[12px] wk_bg-gray_50 placeholder:wk_text-gray_400 focus:wk_outline-[#04D9FF]"
      />

      <button
        disabled={isBtnDisabled}
        className={cn(
          'wk_w-[100%] wk_rounded-14 wk_p-[16px] wk_text-th_white wk_bg-th_accent wk_transition hover:wk_text-th_black hover:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_text-th_black focus:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_outline-none disabled:wk_text-[#535A62] disabled:wk_cursor-not-allowed disabled:wk_bg-th_black',
          transition,
        )}
      >
        {`Редагувати`}
      </button>
    </form>
  );
}
