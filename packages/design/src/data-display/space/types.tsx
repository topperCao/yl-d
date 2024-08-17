import { CSSProperties, ReactNode } from "react";

export interface SpaceProps {
  style?: CSSProperties;
  gap?: number;
  children: ReactNode;
  direction?: 'vertical' | 'horizontal';
}
