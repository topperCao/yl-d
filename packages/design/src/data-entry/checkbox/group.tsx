import { useState, useEffect, useMemo } from 'react';
import Option from './index';
import { CheckGroupProps, OptionsProps } from './type';
import { IconLoading } from '@yl-d/icon';
import './index.less';

const CheckGroup = ({
  disabled = false,
  options = [],
  onChange,
  style = {},
  loading = false,
  direction = 'horizontal',
  ...rest
}: CheckGroupProps) => {
  const items = useMemo(
    () =>
      (options as any).map((option) => {
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
      {loading ? (
        <IconLoading style={{ color: 'var(--primary-color)' }} />
      ) : (
        items.map((option: any) => {
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
        })
      )}
    </div>
  );
};

export default ({ options = [], ...rest }: CheckGroupProps) => {
  /** 这里处理下异步的options  */
  const [data, setData] = useState<OptionsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      if (typeof options === 'function') {
        try {
          setLoading(true);
          const data = await options((rest as any).form);
          setData(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      } else {
        setData(options);
      }
    })();
  }, [options]);
  return <CheckGroup options={data} loading={loading} {...rest} />;
};
