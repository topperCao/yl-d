import { ReactNode, CSSProperties } from "react";

export interface TooltipProps {
  children?: ReactNode;
  title?: ReactNode;
  placement?: 'top' | 'right' | 'left' | 'bottom';
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
  visible?: boolean;
  onVisibleChange?: Function;
  innerStyle?: CSSProperties;
}
