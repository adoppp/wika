import { transition } from '@/app/lib/constants';
import { cn, Svg } from '@/app/lib/utils';
import Link from 'next/link';

interface PageProps {}

export default function Page(props: Readonly<PageProps>) {
  return (
    <div className="wk_h-[calc(100vh-102px)] wk_border-[2px] wk_border-dashed wk_border-[#535A62] wk_rounded-[8px] wk_bg-gray_50"></div>
  );
}
