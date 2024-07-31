import { ReactNode, CSSProperties } from 'react';
import './index.less';

export interface SpaceProps {
  style?: CSSProperties;
  gap?: number;
  children: ReactNode;
  direction?: 'vertical' | 'horizontal';
}

export default ({
  style = {},
  gap = 10,
  children,
  direction = 'horizontal',
}: SpaceProps) => {
  return (
    <div
      className={`yld-space yld-space-${direction}`}
      style={{ ...style, gap }}
    >
      {children}
    </div>
  );
};
