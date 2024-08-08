import { useState, useEffect, CSSProperties } from 'react';
import { OptionsProps } from '../select/type';
import Option, { RadioProps } from './index';
import './index.less';

export interface RadioGroupProps extends RadioProps{
  /** 数据源 */
  options: OptionsProps[];
  /** 样式 */
  style?: CSSProperties;
  /** 单选的类型 */
  type?: 'radio' | 'button';
  /** 选中值 */
  value?: string | number;
}

export default ({
  options = [],
  disabled = false,
  onChange,
  style = {},
  type,
  ...rest
}: RadioGroupProps) => {
  const [value, setValue] = useState(rest.value);
  useEffect(() => {
    setValue(rest.value);
  }, [rest.value]);
  const classNames = ['yld-radio-group'];
  if(type === 'button'){
    classNames.push('yld-radio-group-button')
  }
  return (
    <div className={classNames.join(' ')} style={style}>
      {options.map((option) => {
        return (
          <Option
            key={option.value}
            disabled={disabled || option.disabled}
            checked={option.value === value}
            onChange={() => {
              setValue(option.value);
              onChange?.(option.value, option);
            }}
          >
            {option.label}
          </Option>
        );
      })}
    </div>
  );
};
