import { ServicesListProps } from '../servicesList';
import data_uk from './data_uk.json';
import data_ru from './data_ru.json';
import { Service } from '@/app/components';

export default function ServicesList({ lng }: Readonly<ServicesListProps>) {
  const data = lng === 'uk' ? data_uk : data_ru;

  return (
    <ol
      className={`wk_flex wk_flex-col wk_gap-[12px] wk_text-gray_200 wk_list-decimal wk_list-inside marker:wk_text-[24px] marker:wk_leading-[${
        28 / 24
      }] marker:wk_font-500`}
    >
      {data.map(service => (
        <Service key={service.title} {...service} lng={lng} />
      ))}
    </ol>
  );
}
