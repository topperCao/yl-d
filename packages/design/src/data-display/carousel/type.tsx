import { CSSProperties, ReactNode } from "react";

export interface CarouselProps {
  style?: CSSProperties;
  pages: ReactNode[];
  effect?: undefined | 'fade';
  currentPage?: number;
  onChange?: Function;
  autoPlay?: boolean;
  autoPlayTime?: number;
  showArrow?: boolean;
  legend?: boolean;
  loop?: boolean;
  swipe?: boolean;
}
