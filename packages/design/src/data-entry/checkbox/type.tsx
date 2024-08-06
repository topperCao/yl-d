import { CSSProperties, ReactNode } from 'react';

export interface OptionsProps {
  label: ReactNode;
  value: number | string;
  disabled?: boolean;
}

export interface CheckGroupProps {
  /** 类名 */
  className?: string;
  /** 数据源 */
  options: OptionsProps[];
  /** 值 */
  value?: any;
  /** 改变的钩子 */
  onChange?: Function;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 方向 */
  direction: 'horizontal' | 'vertical';
}

export default (props: CheckGroupProps) => null;
