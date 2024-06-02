import Image from 'next/image';

import { PhotoProps } from '../photo';

import { PROJECT_API } from '@/app/lib/api';

export default function Photo({
  data: { description, beforeUrl, afterUrl },
}: Readonly<PhotoProps>) {
  return (
    <li className="wk_relative wk_flex wk_max-w-[calc(100vw-56px)] mobile:wk_max-w-[378px] wk_mb-[30px] desktop:wk_mb-[50px] wk_rounded-25 wk_overflow-hidden">
      <Image
        src={`${PROJECT_API}${beforeUrl}`}
        alt="Дівчина"
        width={189}
        height={352}
        className="wk_border-r-[0.5px] wk_border-solid wk_border-th_white"
      />

      <Image
        src={`${PROJECT_API}${afterUrl}`}
        alt="Дівчина"
        width={189}
        height={352}
        className="wk_border-l-[0.5px] wk_border-solid wk_border-th_white"
      />

      <p className="wk_absolute wk_left-[0] wk_bottom-[0] wk_w-[100%] wk_py-[16px] wk_bg-[#00000080] wk_text-[18px] wk_leading[calc(22/18)] wk_text-center wk_text-th_white ">
        {description}
      </p>
    </li>
  );
}
