import Select from './select';
import Multiple from './multiple';
import { SelectProps } from './type';
import './index.less';

export default ({ multiple = false, ...props }: SelectProps) => {
  return multiple ? <Multiple {...props} /> : <Select {...props} />;
};
