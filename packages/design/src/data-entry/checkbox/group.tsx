import { useState, useEffect, useMemo } from 'react';
import Option from './index';
import { CheckGroupProps } from './type';
import './index.less';

export default ({
  disabled = false,
  options = [],
  onChange,
  style = {},
  direction = 'horizontal',
  ...rest
}: CheckGroupProps) => {
  const items = useMemo(
    () =>
      options.map((option) => {
        return {
          key: Math.random(),
          label: typeof option === 'string' ? option : option.label,
          value: typeof option === 'string' ? option : option.value,
          disabled: typeof option === 'string' ? false : option.disabled,
        };
      }),
    [options],
  );
  const [value, setValue] = useState(
    Array.isArray(rest.value) ? rest.value : [],
  );
  useEffect(() => {
    setValue(Array.isArray(rest.value) ? rest.value : []);
  }, [rest.value]);
  /** 类名 */
  const classNames = ['yld-checkbox-group'];
  if (direction === 'vertical') {
    classNames.push('yld-checkbox-group-vertical');
  }
  return (
    <div className={classNames.join(' ')} style={style}>
      {items.map((option: any) => {
        return (
          <Option
            key={option.key}
            disabled={disabled || option.disabled}
            checked={
              Array.isArray(value) ? value.includes(option.value) : false
            }
            onChange={(e) => {
              let newValue = [...value];
              if (e.target.checked) {
                newValue.push(option.value);
              } else {
                newValue = value.filter((value) => value !== option.value);
              }
              setValue(newValue);
              onChange?.(newValue);
            }}
          >
            {option.label}
          </Option>
        );
      })}
    </div>
  );
};
