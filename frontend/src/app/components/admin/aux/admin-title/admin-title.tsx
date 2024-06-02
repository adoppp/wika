'use client';

import { usePathname } from 'next/navigation';

export default function AdminTitle() {
  const pathname = usePathname();
  const pathnameArr = pathname.split('/');
  const title = pathnameArr[pathnameArr.length - 1];

  const paths = {
    video: 'відео',
    services: 'послуги',
    photos: 'фото до/після',
    reviews: 'відгуки',
    contacts: 'контакти',
    edit: 'редагування',
    new: 'додавання',
    edit_video: 'Заміна відео',
    edit_telegram: 'редагування Telegram',
    edit_tikTok: 'редагування Tik Tok',
    edit_instagram: 'редагування Instagram',
  };

  return (
    <h1 className="wk_text-[22px] wk_font-600 first-letter:wk_capitalize">
      {title === 'edit'
        ? `${(paths as any)[title]} ${(paths as any)[
            pathnameArr[pathnameArr.length - 3]
          ].replace('ки', 'ку')}`
        : title === 'new'
        ? `${(paths as any)[title]} ${(paths as any)[
            pathnameArr[pathnameArr.length - 2]
          ].replace('ки', 'ку')}`
        : (paths as any)[title]}
    </h1>
  );
}
