import { twMerge } from 'tailwind-merge';

import { SvgTypes, SvgProps } from '@/app/lib/utils/svg/svg.types';
import {
  BurgerMenu,
  Globe,
  Handshake,
  Apple,
  CodeMentor,
  Telegram,
  Instagram,
  Tiktok,
  ArrowCorner,
  ArrowSide,
  Close,
  ModalStats,
  Cookie,
  Dot,
  Google,
  EyeHide,
  EyeShow,
  Columns,
  Contacts,
  Heart,
  Logout,
  Review,
  Youtube,
  AdminArrow,
  Edit,
  Trash,
  Upload,
  transition,
} from './imports';

const svg: Readonly<SvgTypes> = {
  burgerMenu: ({ className }) => (
    <BurgerMenu className={twMerge(transition, className)} />
  ),
  globe: ({ className }) => (
    <Globe className={twMerge(transition, className)} />
  ),
  handshake: ({ className }) => (
    <Handshake className={twMerge(transition, className)} />
  ),
  apple: ({ className }) => (
    <Apple className={twMerge(transition, className)} />
  ),
  codeMentor: ({ className }) => (
    <CodeMentor className={twMerge(transition, className)} />
  ),
  telegram: ({ className }) => (
    <Telegram className={twMerge(transition, className)} />
  ),
  instagram: ({ className }) => (
    <Instagram className={twMerge(transition, className)} />
  ),
  tiktok: ({ className }) => (
    <Tiktok className={twMerge(transition, className)} />
  ),
  arrowCorner: ({ className }) => (
    <ArrowCorner className={twMerge(transition, className)} />
  ),
  arrowSide: ({ className }) => (
    <ArrowSide className={twMerge(transition, className)} />
  ),
  close: ({ className }) => (
    <Close className={twMerge(transition, className)} />
  ),
  modalStats: ({ className }) => (
    <ModalStats className={twMerge(transition, className)} />
  ),
  cookie: ({ className }) => (
    <Cookie className={twMerge(transition, className)} />
  ),
  dot: ({ className }) => <Dot className={twMerge(transition, className)} />,
  google: ({ className }) => (
    <Google className={twMerge(transition, className)} />
  ),
  eyeHide: ({ className }) => (
    <EyeHide className={twMerge(transition, className)} />
  ),
  eyeShow: ({ className }) => (
    <EyeShow className={twMerge(transition, className)} />
  ),
  columns: ({ className }) => (
    <Columns className={twMerge(transition, className)} />
  ),
  contacts: ({ className }) => (
    <Contacts className={twMerge(transition, className)} />
  ),
  heart: ({ className }) => (
    <Heart className={twMerge(transition, className)} />
  ),
  logout: ({ className }) => (
    <Logout className={twMerge(transition, className)} />
  ),
  review: ({ className }) => (
    <Review className={twMerge(transition, className)} />
  ),
  youtube: ({ className }) => (
    <Youtube className={twMerge(transition, className)} />
  ),
  adminArrow: ({ className }) => <AdminArrow className={className} />,
  edit: ({ className }) => <Edit className={className} />,
  trash: ({ className }) => (
    <Trash className={twMerge(transition, className)} />
  ),
  upload: ({ className }) => <Upload className={className} />,
};

function Svg({ className, id }: Readonly<SvgProps>) {
  const SvgComponent = svg[id];

  return SvgComponent ? SvgComponent({ className }) : null;
}

export default Svg;
