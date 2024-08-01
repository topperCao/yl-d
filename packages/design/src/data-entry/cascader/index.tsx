import { useState, useEffect, ReactNode, CSSProperties, useRef } from 'react';
import { Empty } from '../..';
import {
  fieldNamesTransfrom,
  getInitialOptions,
  getLabelByValue,
} from './util';
import cloneDeep from 'lodash.clonedeep';
import Layer from '../../common/layer';
import { IconDown, IconClose, IconRight } from '@yl-d/icon';
import './index.less';

export interface OptionsProps {
  label: ReactNode;
  value: number | string;
  disabled?: boolean;
  children: OptionsProps[];
}

export interface CascaderProps {
  /** 别名 */
  fieldNames?: {
    label?: string;
    value?: string;
    children?: string;
  };
  /** 类名 */
  className?: string;
  /** 多选模式 */
  multiple?: boolean;
  /** 数据源 */
  options?: OptionsProps[];
  /** 值 */
  value?: number[] | string[];
  /** 改变钩子 */
  onChange?: Function;
  /** 是否清空 */
  allowClear?: boolean;
  /** 提示语 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 下拉菜单的类名 */
  layerClassName?: string;
  /** 挂载的容器 */
  getPopupContainer?: () => HTMLElement;
}

export default ({
  allowClear = true,
  placeholder,
  disabled = false,
  style = {},
  className,
  layerClassName,
  getPopupContainer,
  onChange,
  fieldNames,
  ...rest
}: CascaderProps) => {
  const [open, setOpen] = useState(false);
  // 获得格式化 options
  const optionsRef = useRef(
    fieldNamesTransfrom(fieldNames, cloneDeep(rest.options)),
  );
  // 设置数据源
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState<any>(rest.value || []); // 内部存选中值容器
  useEffect(() => {
    setValue(rest.value || []);
  }, [rest.value]);
  // 初始化 options
  useEffect(() => {
    open && setOptions(getInitialOptions(value, optionsRef.current));
  }, [open]);

  const classNames = ['yld-cascader'];
  if (open) {
    classNames.push('yld-cascader-open');
  }
  if (allowClear) {
    classNames.push('yld-cascader-allowClear');
  }
  if (disabled) {
    classNames.push('yld-cascader-disabled');
  }
  if (className) {
    classNames.push('className');
  }
  const label = getLabelByValue(value, optionsRef.current);
  const selectionRef = useRef<HTMLDivElement>();
  return (
    <div className={classNames.join(' ')} style={style}>
      <div
        className="yld-cascader-selection"
        ref={selectionRef}
        onClick={() => {
          if (disabled) return;
          setOpen(!open);
        }}
      >
        <div className="yld-cascader-selection-selected-value" title={label}>
          {label === undefined ? (
            <span style={{ color: '#aaa' }}>{placeholder}</span>
          ) : (
            label
          )}
        </div>
        <IconDown />
        {!disabled && allowClear && value?.length > 0 && (
          <IconClose
            style={{ fontSize: 12 }}
            onClick={(e: any) => {
              e.stopPropagation(); // 阻止冒泡
              setValue([]); // 还原
              onChange?.([]);
              setOptions([
                optionsRef.current.map((item: any) => {
                  return item;
                }),
              ]);
            }}
          />
        )}
      </div>
      {open && (
        <Layer
          layerWidth="fix-content"
          layerClose={() => setOpen(false)}
          domRef={selectionRef}
          layerClassName={layerClassName}
          getPopupContainer={getPopupContainer}
        >
          <div className="yld-cascader-dropdown">
            {options.length > 0 ? (
              options?.map((item, index) => {
                return (
                  <div className="yld-cascader-dropdown-col" key={index}>
                    {item.map((option: any) => {
                      const className = ['yld-cascader-dropdown-menu'];
                      if (value?.some((item) => item === option.value)) {
                        className.push('yld-cascader-dropdown-menu-selected');
                      }
                      if (option.disabled) {
                        className.push('yld-cascader-dropdown-menu-disabled');
                      }
                      return (
                        <div
                          key={option.key}
                          className={className.join(' ')}
                          onClick={() => {
                            if (option.disabled) return;
                            value[index] = option.value;
                            value.splice(index + 1, 999); // 根节点切换清空后面
                            setValue([...value]);
                            if (option.children) {
                              options[index + 1] = option.children;
                              options.splice(index + 2, 999); // 根节点切换清空后面
                              setOptions([...options]);
                            } else {
                              setOpen(false);
                              onChange?.(value);
                            }
                          }}
                        >
                          {option.label}
                          {option.children && (
                            <IconRight />
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })
            ) : (
              <Empty label="暂无数据" />
            )}
          </div>
        </Layer>
      )}
    </div>
  );
};
