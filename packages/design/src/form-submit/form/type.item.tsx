import { ReactNode } from 'react';
import { FormInstance } from './type.instance';

export interface ItemTypeProps {
  form: FormInstance;
  value: any;
  onChange: Function;
}
export interface FormItemProps {
  /** 表单项类型 */
  type: string | ((props: ItemTypeProps) => ReactNode);
  /** 名称 */
  name?: string;
  /** 标签 */
  label?: ReactNode;
  /** 是否必填 */
  required?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 小标题 */
  tooltip?: ReactNode;
  /** 描述信息 */
  extra?: ReactNode;
  /** 占据的格子数 */
  span?: 2 | 3 | 'fill';
  /** 值改变触发指定的item渲染 */
  notifiRender?: {
    name: string;
    clear?: boolean;
  }[];
  /** 是否展示自己 */
  visible?: (form: FormInstance) => boolean;
  /** 表单项属性 */
  props?: {
    [key: string]: any;
    /** 改变的钩子 */
    onChange: (v: any, option: any, form: FormInstance) => void;
  };
}

const Hello: React.FC<FormItemProps> = () => null;

export default Hello;
