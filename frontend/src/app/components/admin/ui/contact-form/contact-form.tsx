'use client';

import { ContactsAttributes, updateContacts } from '@/app/lib/api';
import { transition } from '@/app/lib/constants';
import { cn, loadingOptions, notifyOptions } from '@/app/lib/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Loading, Notify } from 'notiflix';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface AdminContactsFormProps {
  contacts: ContactsAttributes;
  name: string;
}

export type Form = {
  link: string;
};

export default function ContactForm({
  contacts,
  name,
}: Readonly<AdminContactsFormProps>) {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [inputValue, setInputValue] = useState((contacts as any)[name]);

  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const token = (session?.user as any)?.jwt;
  const router = useRouter();

  useEffect(() => {
    setIsBtnDisabled(
      (contacts as any)[name] === inputValue || inputValue === '',
    );
  }, [inputValue]);

  const { mutateAsync } = useMutation({
    mutationFn: updateContacts,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['contacts'],
      });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>();

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue((e.target as any)?.value);
  };

  async function onSubmit() {
    Loading.circle('Відправляємо зміни на сервер', loadingOptions);

    try {
      await mutateAsync({ data: { [name]: inputValue }, token });

      Notify.success(`${name} успішно змінено`, notifyOptions);

      setTimeout(() => {
        router.replace('/admin/contacts');
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
      onSubmit={handleSubmit(onSubmit)}
      className="wk_flex wk_flex-col wk_h-[calc(100vh-102px)] wk_justify-between"
    >
      <input
        {...register(`link`)}
        type="text"
        required
        value={inputValue}
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
