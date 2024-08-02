import { CSSProperties, ReactNode} from 'react';

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
    title?: string;
    content: ReactNode;
  };
  /** 类名 */
  className?: string;
  /** 加载中 */
  loading?: boolean;
  children?: ReactNode;
}

export default (props: ButtonProps) => null;