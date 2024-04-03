import { TFunction } from 'i18next';

interface NavBarProps {
  t: TFunction<any, string>;
  location: 'header' | 'mob_menu' | 'footer';
}

export default NavBarProps;
