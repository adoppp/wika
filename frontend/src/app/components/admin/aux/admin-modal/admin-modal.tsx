'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  MutationFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { Loading, Notify } from 'notiflix';
import {
  deleteMedia,
  deletePhoto,
  deleteReview,
  deleteService,
} from '@/app/lib/api';
import {
  cn,
  DisableScroll,
  loadingOptions,
  ModalEventHandlers,
  notifyOptions,
  Svg,
} from '@/app/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { transition } from '@/app/lib/constants';

export default function AdminModal() {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    setIsOpen(
      !!(
        searchParams.get('deleteService') ||
        searchParams.get('deletePhoto') ||
        searchParams.get('deleteReview')
      ),
    );
  }, [searchParams]);

  useEffect(() => {
    if (isOpen) {
      dialogRef?.current?.showModal();
    } else {
      dialogRef?.current?.close();
    }
  }, [isOpen]);

  const cancelLink = `/admin${
    searchParams.get('deleteService')
      ? '/services'
      : searchParams.get('deletePhoto')
      ? '/photos'
      : searchParams.get('deleteReview')
      ? '/reviews'
      : ''
  }`;

  const token = (session?.user as any)?.jwt;

  const mutationFn = searchParams.get('deleteService')
    ? (deleteService as MutationFunction<any, any>)
    : searchParams.get('deletePhoto')
    ? (deletePhoto as MutationFunction<any, any>)
    : searchParams.get('deleteReview')
    ? (deleteReview as MutationFunction<any, any>)
    : undefined;

  const queryKey = [
    searchParams.get('deleteService')
      ? 'services'
      : searchParams.get('deletePhoto')
      ? 'photos'
      : searchParams.get('deleteReview')
      ? 'reviews'
      : '',
  ];

  const { mutateAsync } = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey,
      });
      router.refresh();
    },
  });

  const handleDelete = async () => {
    Loading.circle(
      `Видаляємо ${
        searchParams.get('deleteService')
          ? 'послугу'
          : searchParams.get('deletePhoto')
          ? 'кейс'
          : searchParams.get('deleteReview')
          ? 'відгук'
          : ''
      }...`,
      loadingOptions,
    );

    try {
      if (searchParams.get('deleteService')) {
        await Promise.allSettled([
          ...(searchParams.get('deleteService') as string)
            .split(',')
            .map(id => {
              mutateAsync({ id, token });
            }),
        ]);
      } else if (searchParams.get('deletePhoto')) {
        await Promise.allSettled([
          ...(searchParams.get('media') as string)
            .split(',')
            .map(id => deleteMedia({ id, token })),
          ...(searchParams.get('deletePhoto') as string)
            .split(',')
            .map(id => deletePhoto({ id, token })),
        ]);
      } else if (searchParams.get('deleteReview')) {
        await Promise.allSettled([
          ...(searchParams.get('deleteReview') as string)
            .split(',')
            .map(id => mutateAsync({ id, token })),
          deleteMedia({ id: searchParams.get('avatar') as string, token }),
        ]);
      }

      Notify.success(
        searchParams.get('deleteService')
          ? 'Послугу успішно видалено'
          : searchParams.get('deletePhoto')
          ? 'Кейс успішно видалено'
          : searchParams.get('deleteReview')
          ? 'Відгук успішно видалено'
          : '',
        notifyOptions,
      );

      setTimeout(() => {
        router.replace(cancelLink);
      }, 2000);
      router.refresh();
    } catch (error) {
      Notify.failure(`Виникла помилка. ${error}`, notifyOptions);
    } finally {
      Loading.remove();
    }
  };

  return (
    <dialog ref={dialogRef} className="wk_rounded-[8px]">
      <div className="wk_relative wk_flex wk_flex-col wk_items-center wk_gap-[52px] wk_w-[392px] wk_px-[36px] wk_pt-[44px] wk_pb-[36px] ">
        {isOpen && (
          <>
            <DisableScroll />
            <ModalEventHandlers
              backdropClassName="{styles.backdrop}"
              cancelLink={cancelLink}
            />
          </>
        )}

        <Link
          href={cancelLink}
          className="wk_absolute wk_top-[16px] wk_right-[16px] wk_flex wk_justify-center wk_items-center wk_p-[4px] wk_rounded-[2px] wk_text-th_black wk_transition-colors hover:wk_text-th_accent focus:wk_text-th_accent focus:wk_outline-none"
          aria-label="Close pop up window"
        >
          <Svg id="closeSmall" />
        </Link>

        <h1 className="wk_text-[24px] wk_font-500 wk_text-center">
          Ви дійсно бажаєте видалити
          {`${
            searchParams.get('deleteService')
              ? ' послугу'
              : searchParams.get('deletePhoto')
              ? ' кейс'
              : searchParams.get('deleteReview')
              ? ' відгук'
              : ''
          }`}
          ?
        </h1>

        <div className="wk_flex wk_justify-center wk_gap-[24px] wk_w-[100%]">
          <Link
            href={cancelLink}
            className={cn(
              'wk_flex wk_justify-center wk_items-center wk_w-[94px] wk_p-[8px] wk_text-[14px] wk_rounded-[8px] wk_text-th_black wk_bg-th_accent wk_transition hover:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_outline-none',
              transition,
            )}
          >
            Відміна
          </Link>

          <button
            type="button"
            className={cn(
              'wk_block wk_w-[94px] wk_p-[8px] wk_text-[14px] wk_rounded-[8px] wk_text-th_white wk_bg-red_danger wk_transition-colors hover:wk_bg-[#FF3232] focus:wk_bg-[#FF3232] focus:wk_outline-none',
              transition,
            )}
            onClick={handleDelete}
          >
            Видалити
          </button>
        </div>
      </div>
    </dialog>
  );
}
