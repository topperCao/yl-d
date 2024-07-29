import { useEffect, useState } from 'react';
import { DatePicker, Space } from '../../index';
import { DatePickerProps } from '../date-picker';

export interface RangeDatePickerProps
  extends Omit<DatePickerProps, 'value' | 'placeholder'> {
  /** 值 */
  value?: string[];
  /** 提示文案 */
  placeholder?: string[];
}

export default ({
  onChange,
  placeholder = ['开始时间', '结束时间'],
  allowClear = true,
  disabled = false,
  style = {},
  ...rest
}: RangeDatePickerProps) => {
  const [value, setValue]: any = useState(rest.value);
  useEffect(() => {
    setValue(rest.value); // update
  }, [rest.value]);
  const handelChange = (v: string[]) => {
    const dates = v[0] > v[1] ? v.reverse() : v;
    setValue(dates);
    onChange(dates);
  };
  return (
    <div className="yld-date-picker-range" style={style}>
      <Space>
        <DatePicker
          disabled={disabled}
          allowClear={allowClear}
          placeholder={placeholder[0]}
          onChange={(v: string) => {
            handelChange([v, value[1]]);
          }}
          {...rest}
          value={value?.[0]}
        />
        <span>-</span>
        <DatePicker
          disabled={disabled}
          allowClear={allowClear}
          placeholder={placeholder[1]}
          onChange={(v: string) => {
            handelChange([value[0], v]);
          }}
          {...rest}
          value={value?.[1]}
        />
      </Space>
    </div>
  );
};
