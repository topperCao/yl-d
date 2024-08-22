import './index.less';
import { BadgeProps } from './type';

export default ({
  color,
  count,
  dot = false,
  children,
}: BadgeProps | any) => {
  let style: any = {};
  if (color) {
    style.backgroundColor = color;
  }
  return (
    <span className="yld-badge-wrapper">
      {children}
      {dot ? (
        <sup className="yld-badge-dot" style={style} />
      ) : (
        <sup style={style} className="yld-badge-count">
          {count}
        </sup>
      )}
    </span>
  );
};
