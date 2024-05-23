type Svg =
  | 'burgerMenu'
  | 'globe'
  | 'handshake'
  | 'apple'
  | 'codeMentor'
  | 'telegram'
  | 'instagram'
  | 'tiktok'
  | 'arrowCorner'
  | 'arrowSide'
  | 'close'
  | 'modalStats'
  | 'cookie'
  | 'dot'
  | 'google'
  | 'eyeShow'
  | 'eyeHide'
  | 'columns'
  | 'contacts'
  | 'heart'
  | 'logout'
  | 'review'
  | 'youtube'
  | 'adminArrow';

export type SvgTypes = {
  [K in Svg]: (props: { className?: string }) => JSX.Element;
};

export interface SvgProps {
  className?: string;
  id: Svg;
}
