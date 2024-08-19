import { CSSProperties, ReactNode } from "react";

export interface AvatarProps {
  style?: CSSProperties;
  shape?: 'circle' | 'square';
  children?: ReactNode | ReactNode[];
  size?: number;
}
