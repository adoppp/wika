'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/app/components';

import { ServiceProps } from '../service';

export default function Service({
  data: { title, description },
  lng,
}: Readonly<ServiceProps>) {
  const router = useRouter();

  const openModal = () => {
    router.push(`?showModal=${title}`);
  };

  return (
    <li className="wk_relative wk_ps-[46px] wk_pe-[16px] wk_py-[30px] desktop:wk_px-[80px] wk_rounded-25 wk_bg-th_bg_primary">
      <h3 className="wk_inline-block wk_max-w-[calc(100vw-174px)] wk_ms-[28px] desktop:wk_ms-[108px] wk_mb-[20px] wk_text-[24px] wk-leading-[calc(28/24)] wk_font-500 wk_text-th_whit">
        {title}
      </h3>

      <div className="desktop:wk_flex desktop:wk_justify-between desktop:wk_gap-[80px]">
        <ul className="wk_mb-[20px] desktop:wk_mb-[0] wk_ps-[-18px] desktop:wk_ps-[148px] wk_text-[18px] wk_leading-[calc(20/18)] wk_text-gray_400 wk_list-disc">
          {description.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Button
          color="pink"
          lng={lng}
          label="label"
          onClick={openModal}
          className="desktop:wk_self-start wk_ml-auto"
        />
      </div>
    </li>
  );
}
