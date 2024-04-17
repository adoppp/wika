import { transition } from '@/app/lib/constants';
import { cn } from '@/app/lib/utils';
import { ToggleProps } from '../toggle';

export default function Toggle({
  checked,
  id,
  handleToggle,
}: Readonly<ToggleProps>) {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={() => handleToggle(id)}
      className={cn(
        'wk_absolute wk_top-0 wk_right-0 wk_w-[44px] wk_h-[24px] wk_rounded-50 wk_bg-hotPink_300 checked:wk_bg-green_success wk_cursor-pointer wk_appearance-none wk_transition-colors before:wk_content-[""] before:wk_absolute before:wk_top-[2px] before:wk_left-[2px] before:wk_block before:wk_size-[20px] before:wk_rounded-[50%] before:wk_bg-th_white before:wk_transition-all checked:before:wk_left-[22px]',
        transition,
      )}
    />
  );
}
