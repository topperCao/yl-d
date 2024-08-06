import { BreadcrumbProps } from './type';
import { Fragment } from 'react';
import './index.less';

export default ({
  onClick = () => undefined,
  style = {},
  separator = '/',
  items = [],
  maxCount,
}: BreadcrumbProps) => {
  return (
    <div className="yld-breadcrumb" style={style}>
      {items.map((item, index) => {
        const isLast = index  === items.length - 1;
        return (
          <Fragment key={item.title}>
            {item.href ? (
              <a href={item.href}>{item.title}</a>
            ) : (
              <div
                className="yld-breadcrumb-item"
                onClick={() => {
                  onClick?.(item);
                }}
              >
                {item.title}
              </div>
            )}
            {!isLast && (
              <div className="yld-breadcrumb-item-separator">{separator}</div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
