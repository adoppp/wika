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
  | 'arrowSide';

export type SvgTypes = {
  [K in Svg]: (props: { className?: string }) => JSX.Element;
};

export interface SvgProps {
  className?: string;
  id: Svg;
}
