'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Notify } from 'notiflix';

import { cn, notifyOptions, Svg } from '@/app/lib/utils';

type Inputs = {
  identifier: string;
  password: string;
};

export default function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async values => {
    try {
      await signIn('credentials', values);
    } catch (error) {
      Notify.failure((error as any).message, notifyOptions);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="wk_flex wk_flex-col wk_items-start wk_w-[486px] wk_pt-[38px] wk_px-[60px] wk_pb-[46px] wk_rounded-14 wk_bg-th_white"
    >
      <legend className="wk_w-[100%] wk_mb-[26px] wk_text-[30px] wk_font-500 wk_leading-[calc(36/30)] wk_text-center">
        Увійти в акаунт
      </legend>

      <button
        type="button"
        onClick={() => signIn('google')}
        className="wk_flex wk_justify-center wk_items-center wk_gap-[10px] wk_w-[100%] wk_p-[9px] wk_mb-[26px] wk_rounded-14 wk_text-[18px] wk_font-500 wk_leading-[calc(28/18)] wk_text-[#13183a] wk_bg-gray_50 wk_transition-colors hover:wk_bg-th_accent hover:wk_text-th_white focus:wk_bg-th_accent focus:wk_text-th_white focus:outline-none"
      >
        <Svg id="google" />
        Google
      </button>

      <p className="wk_relative wk_w-[100%] wk_mb-[26px] wk_text-[12px] wk_font-500 wk_leading-[calc(16/12)] wk_text-[#13183a] wk_text-center">
        aбо
      </p>

      <div className="wk_relative wk_w-[100%] wk_mb-[26px]">
        <label
          htmlFor="name"
          className="wk_block wk_mb-[8px] wk_text-[14px] wk_font-500 wk_leading-[calc(20/14)]"
        >
          Імʼя користувача*
        </label>

        <input
          id="name"
          type="text"
          {...register('identifier', { required: true })}
          placeholder="Your name"
          className={cn(
            'wk_w-[100%] wk_py-[10px] wk_pr-[54px] wk_pl-[10px] wk_rounded-[8px] wk_text-[16px] wk_bg-gray_50 focus:wk_outline-none wk_border wk_border-th_white wk_border-solid focus-visible:wk_border-[#04D9FF] focus-visible:wk_bg-th_white placeholder:wk_text-gray_400',
            errors.identifier &&
              'wk_border-red_danger focus-visible:wk_border-red_danger',
          )}
        />

        {errors.identifier?.type === 'required' && (
          <p className="wk_text-[12px] wk_text-red_danger">
            Це обовʼязкове поле
          </p>
        )}
      </div>

      <div className="wk_relative wk_w-[100%] wk_mb-[26px]">
        <label
          htmlFor="password"
          className="wk_block wk_mb-[8px] wk_text-[14px] wk_font-500 wk_leading-[calc(20/14)]"
        >
          Пароль*
        </label>

        <input
          id="password"
          type={isPasswordVisible ? 'text' : 'password'}
          {...register('password', { required: true, minLength: 8 })}
          placeholder="Введіть мінімум 8 символів"
          className={cn(
            'wk_w-[100%] wk_py-[10px] wk_pr-[54px] wk_pl-[10px] wk_rounded-[8px] wk_text-[16px] wk_bg-gray_50 focus:wk_outline-none wk_border wk_border-th_white wk_border-solid focus-visible:wk_border-[#04D9FF] focus-visible:wk_bg-th_white placeholder:wk_text-gray_400',
            errors.password &&
              'wk_border-red_danger focus-visible:wk_border-red_danger',
          )}
        />

        {errors.password?.type === 'required' && (
          <p className="wk_text-[12px] wk_text-red_danger">
            Це обовʼязкове поле
          </p>
        )}

        <button
          type="button"
          onClick={() => setIsPasswordVisible(value => !value)}
          className="wk_absolute wk_top-[36px] wk_right-[20px] wk_w-[24px] wk_p-[0] wk_bg-none wk_text-[#8E8E93] wk_transition-colors hover:wk_text-th_accent focus:wk_text-th_accent focus:wk_outline-none"
        >
          {isPasswordVisible ? <Svg id="eyeHide" /> : <Svg id="eyeShow" />}
        </button>
      </div>

      <button
        disabled={!isValid}
        className="wk_w-[100%] wk_rounded-14 wk_mb-[16px] wk_p-[14px] wk_text-th_white wk_bg-th_accent wk_transition hover:wk_text-th_black hover:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_text-th_black focus:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_outline-none disabled:wk_text-[#535A62] disabled:wk_cursor-not-allowed disabled:wk_bg-th_black"
      >
        Увійти
      </button>
    </form>
  );
}
