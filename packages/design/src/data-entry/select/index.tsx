import Select from './select';
import Multiple from './multiple';
import { OptionsProps, SelectProps } from './type';
import { useEffect, useState } from 'react';
import './index.less';

export default ({
  multiple = false,
  fieldNames = { label: 'label', value: 'value' },
  ...props
}: SelectProps) => {
  /** 这里处理下异步的options  */
  const [options, setOptions] = useState<OptionsProps[]>([]);
  useEffect(() => {
    if (typeof props.options === 'function') {
      props.options((props as any).form).then((options) => {
        setOptions(options);
      });
    }
  }, []);
  return multiple ? (
    <Multiple
      {...props}
      // 处理别名
      options={options.map((option) => ({
        label: option[fieldNames.label],
        value: option[fieldNames.value],
      }))}
    />
  ) : (
    <Select
      {...props} // 处理别名
      options={options.map((option) => ({
        label: option[fieldNames.label],
        value: option[fieldNames.value],
      }))}
    />
  );
};
