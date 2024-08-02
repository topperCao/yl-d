import { useEffect, useState } from 'react';
import { IconLoading } from '@yl-d/icon';
import { Modal } from '../..';
import { ButtonProps } from './type';
import './index.less';

export default ({
  disabled,
  ghost,
  onClick,
  icon,
  type,
  style,
  className,
  children,
  confirm,
  loading = false,
}: ButtonProps) => {
  const classNames = ['yld-btn'];
  const [spin, setSpin] = useState(loading);
  useEffect(() => {
    if (loading !== spin) {
      setSpin(loading);
    }
  }, [loading]);
  if (className) {
    classNames.push(className);
  }
  if (type) {
    classNames.push('yld-btn-' + type);
  }
  if (ghost) {
    classNames.push('yld-btn-ghost');
  }
  if (disabled) {
    classNames.push('yld-btn-disabled');
  }
  if (spin) {
    classNames.push('yld-btn-loading');
  }
  return (
    <button
      style={style}
      className={classNames.join(' ')}
      onClick={async (e: any) => {
        if (disabled) return;
        if (confirm) {
          Modal.confirm({
            ...confirm,
            async onOk() {
              await onClick();
            },
          });
        } else {
          setSpin(true);
          try {
            typeof onClick === 'function' && (await onClick(e));
          } catch (error) {
            console.error('按钮点击异常:', error);
          } finally {
            setSpin(false);
          }
        }
      }}
    >
      {spin && <IconLoading />}
      {icon}
      {children || ''}
    </button>
  );
};
