import { CSSProperties, ReactNode, useEffect, useState } from 'react';
import { IconLoading } from '@yl-d/icon';
import './index.less';

export interface ButtonProps {
  /** 类型 */
  type?: 'primary' | 'link' | 'dashed' | 'danger';
  /** 是否禁用 */
  disabled?: Boolean;
  /** 幽灵按钮 */
  ghost?: Boolean;
  /** 点击事件 */
  onClick?: Function;
  /** 图标 */
  icon?: ReactNode;
  /** 样式 */
  style?: CSSProperties;
  /** 二次确认提示 */
  confirm?: {
    title?: String;
    content: ReactNode;
  };
  /** 类名 */
  className?: string;
  children?: ReactNode;
  /** 加载中 */
  loading?: boolean;
}

export default ({
  disabled,
  ghost,
  onClick,
  icon,
  type,
  style,
  className,
  children,
  loading = false
}: ButtonProps) => {
  const classNames = ['yld-btn'];
  const [spin, setSpin] = useState(loading);
  useEffect(() => {
    if(loading !== spin){
      setSpin(loading);
    }
  }, [loading])
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
        setSpin(true);
        try {
          typeof onClick === 'function' && (await onClick(e));
        } catch (error) {
          console.error('按钮点击异常:', error);
        } finally {
          setSpin(false);
        }
      }}
    >
      {spin && <IconLoading /> }
      {icon}
      {children || ''}
    </button>
  );
};
