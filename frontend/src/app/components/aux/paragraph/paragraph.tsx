import { cn } from '@/app/lib/utils';
import ParagraphProps from '@/app/components/aux/paragraph/paragraph.types';

export default function paragraph({
  children,
  className,
}: Readonly<ParagraphProps>) {
  return (
    <p
      className={cn(
        'wk_text-[20px] wk_leading-[calc(32/20)] wk_font-300 wk_text-center wk_text-gray_300',
        className,
      )}
    >
      {children}
    </p>
  );
}
