import { CSSProperties, ReactNode } from 'react';
import Select from './components/select';
import SelectMultiple from './components/select-multiple';
import './index.less';

export interface OptionsProps {
  label: ReactNode;
  value: number | string;
  disabled?: boolean;
}

export interface SelectProps {
  /** 类名 */
  className?: string;
  /** 多选模式 */
  multiple?: boolean;
  /** 数据源 */
  options?: OptionsProps[];
  /** 值 */
  value?: number | string | any[];
  /** 是否清空 */
  allowClear?: boolean;
  /** 提示语 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 下拉层类名 */
  layerClassName?: string;
  /** 改变钩子 */
  onChange?: Function;
  /** 查询的钩子 */
  onSearch?: Function;
  /** 是否支持查询 */
  showSearch?: Boolean;
  /** 过滤的钩子 */
  filter?: Function;
  /** 挂在的容器 */
  getPopupContainer?: () => HTMLElement
}

export default ({ multiple = false, ...props }: SelectProps) => {
  return multiple ? <SelectMultiple {...props} /> : <Select {...props} />;
};
