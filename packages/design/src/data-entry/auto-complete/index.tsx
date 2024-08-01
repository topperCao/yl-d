import { useState, useEffect, CSSProperties, useRef } from 'react';
import { Empty, Layer } from '../..';
import { IconClose } from '@yl-d/icon';
import './index.less';

export interface AutoCompleteProps {
  /** 类名 */
  className?: string;
  /** 下拉菜单的类名 */
  layerClassName?: string;
  /** 挂载的容器 */
  getPopupContainer?: () => HTMLElement;
  /** 数据源 */
  options: string[];
  /** 值 */
  value?: string;
  /** 是否可清空 */
  allowClear?: Boolean;
  /** 提示文案 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: Boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 选择后钩子 */
  onChange?: Function;
}

export default ({
  className,
  options,
  allowClear = true,
  placeholder = '请输入',
  disabled = false,
  style = {},
  layerClassName,
  getPopupContainer,
  onChange,
  ...rest
}: AutoCompleteProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(rest.value || '');
  const [suffix, setSuffix] = useState('');
  useEffect(() => {
    let suffix = options.find((item) => rest.value?.endsWith(item)); // 拆分 value / suffix
    if (suffix) {
      setValue(rest.value.substr(0, rest.value.lastIndexOf(suffix)));
      setSuffix(suffix);
    } else {
      setValue(rest.value || '');
    }
  }, [rest.value]);
  const classNames = ['yld-auto'];
  if (disabled) {
    classNames.push('yld-auto-disabled');
  }
  if (className) {
    classNames.push(className);
  }
  const selectionRef = useRef<HTMLDivElement>();
  return (
    <div className={classNames.join(' ')} style={style}>
      <div
        ref={selectionRef}
        onClick={() => {
          if (disabled) return;
          setOpen(!open);
        }}
      >
        <input
          value={value + suffix}
          className="yld-auto-input"
          placeholder={placeholder}
          onClick={(e) => {
            if (open) {
              e.stopPropagation();
            }
          }}
          onChange={(e) => {
            setValue(e.target.value);
            setSuffix('');
          }}
        />
        {allowClear && value !== '' && (
          <IconClose
            style={{ fontSize: 12 }}
            onClick={(e: any) => {
              e.stopPropagation(); // 阻止冒泡
              setValue('');
              setSuffix('');
              onChange?.('');
            }}
          />
        )}
      </div>
      {open && value !== '' && (
        <Layer
          layerClose={() => setOpen(false)}
          layerClassName={layerClassName}
          getPopupContainer={getPopupContainer}
          domRef={selectionRef}
        >
          {options.length > 0 ? (
            options.map((option) => {
              const className = ['yld-select-dropdown-menu'];
              if (option === value) {
                className.push('yld-select-dropdown-menu-selected');
              }
              return (
                <div
                  key={option}
                  className={className.join(' ')}
                  onClick={() => {
                    setOpen(false);
                    setSuffix(option);
                    onChange?.(value + option);
                  }}
                >
                  {value + option}
                </div>
              );
            })
          ) : (
            <Empty label="暂无数据" />
          )}
        </Layer>
      )}
    </div>
  );
};
