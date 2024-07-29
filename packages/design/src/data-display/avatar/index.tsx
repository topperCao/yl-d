import { CSSProperties, ReactNode } from 'react';
import './index.less';

export interface AvatarProps {
  style?: CSSProperties;
  shape?: 'circle' | 'square';
  children?: ReactNode | ReactNode[];
  size?: number;
}

export default ({
  style = {},
  shape = 'circle',
  children = null,
  size = 40,
}: AvatarProps) => {
  let fontSize: any = 'var(--font-size-base)';
  console.log(children)
  if (typeof children === 'string') {
    fontSize = children.length > 4 ? 9 : fontSize;
  }
  return (
    <div
      style={Object.assign(style, {
        width: size,
        height: size,
        fontSize,
      })}
      className={`yld-avatar yld-avatar-${shape}`}
    >
      {children}
    </div>
  );
};
