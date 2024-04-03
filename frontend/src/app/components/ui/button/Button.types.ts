import { CSSProperties, ReactNode } from 'react';

interface ButtonProps {
  type?: 'submit' | 'button' | 'reset';
  children: ReactNode;
  color: 'white' | 'pink';
  className?: string;
  onClick?: () => void;
}

export default ButtonProps;
