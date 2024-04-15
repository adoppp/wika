import { Button } from '@/app/components/ui';
import { ServiceProps } from '../service';

export default function Service({
  title,
  description,
  price,
  period,
  lng,
}: Readonly<ServiceProps>) {
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

        <div className="mobile:wk_flex mobile:wk_justify-between mobile:wk_items-center desktop:wk_flex-col desktop:wk_justify-start desktop:wk_gap-[48px]">
          <p className="wk_flex wk_flex-col wk_mb-[20px] mobile:wk_mb-[0] wk_text-[44px] wk_leading-[calc(52/44)] wk_text-th_white">
            {price}

            <span className="wk_text-[18px] wk_leading-[calc(20/18)] wk_text-gray_200">
              грн/{period}
            </span>
          </p>

          <Button color="pink" lng={lng} label='label' />
        </div>
      </div>
    </li>
  );
}
