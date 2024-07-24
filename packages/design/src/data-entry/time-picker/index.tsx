import { useState, useEffect, useRef, CSSProperties } from 'react';
import { Button, Icon, Input, Layer } from '../../index';

export interface TimePickerProps {
  /** 类名 */
  className?: string;
  /** 值 */
  value?: string;
  /** 是否清空 */
  allowClear?: boolean;
  /** 提示语 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 改变钩子 */
  onChange?: Function;
  /** 下拉菜单的类名 */
  layerClassName?: string;
  /** 挂载的容器 */
  getPopupContainer?: () => HTMLElement;
}

export default ({
  onChange,
  allowClear = true,
  placeholder,
  disabled = false,
  style = {},
  layerClassName,
  getPopupContainer,
  ...rest
}: TimePickerProps) => {
  const timeList: any = [
    Object.keys(new Array(24).fill('')).map((item: any) => {
      return {
        key: Math.random(),
        label: item.padStart(2, 0),
        value: item.padStart(2, 0),
      };
    }),
    Object.keys(new Array(60).fill('')).map((item: any) => {
      return {
        key: Math.random(),
        label: item.padStart(2, 0),
        value: item.padStart(2, 0),
      };
    }),
    Object.keys(new Array(60).fill('')).map((item: any) => {
      return {
        key: Math.random(),
        label: item.padStart(2, 0),
        value: item.padStart(2, 0),
      };
    }),
  ];
  /**
   * 数据转化 转为2维数组渲染
   */
  const [open, setOpen] = useState(false);
  const [times, setTimes] = useState([]); // 最终选中的指
  const [value, setValue] = useState(rest.value ? rest.value.split(':') : []); // 内部存选中值容器
  /**
   * value Change
   */
  useEffect(() => {
    setTimes(rest.value ? rest.value.split(':') : []);
    setValue(rest.value ? rest.value.split(':') : []);
  }, [rest.value]);
  const classNames = ['yld-time-picker'];
  if (disabled) {
    classNames.push('yld-time-picker-disabled');
  }
  const selectionRef = useRef<HTMLDivElement>();
  return (
    <div className={classNames.join(' ')} style={style}>
      <div className="yld-time-picker-input" ref={selectionRef}>
        <Input
          suffix={<Icon type="time" />}
          disabled={disabled}
          placeholder={placeholder}
          value={times.join(':')}
          readOnly
          showCount={false}
          allowClear={allowClear && times.length > 0}
          onAllowClear={() => {
            setValue([]);
            typeof onChange === 'function' && onChange('');
          }}
          onClick={(e: any) => {
            if (open) {
              e.stopPropagation();
            }
            setOpen(true);
          }}
        />
      </div>
      <Layer
        open={open}
        layerClose={() => setOpen(false)}
        layerClassName={layerClassName}
        getPopupContainer={getPopupContainer}
        domRef={selectionRef}
        layerWidth="fix-content"
        content={
          <div className="yld-time-picker-dropdown">
            <div className="yld-time-picker-dropdown-value">
              {value.length === 0 ? placeholder : value.join(':')}
            </div>
            <div className="yld-time-picker-dropdown-box">
              {timeList.map((item, index) => {
                return (
                  <div className="yld-time-picker-dropdown-col" key={index}>
                    {item.map((option, _index) => {
                      let selelcted = false;
                      if (value[index] === undefined) {
                        selelcted = _index === 0;
                      } else {
                        selelcted = value[index] === option.value;
                      }
                      const className = ['yld-time-picker-dropdown-menu'];
                      if (selelcted) {
                        className.push(
                          'yld-time-picker-dropdown-menu-selected',
                        );
                      }
                      if (disabled) {
                        className.push(
                          'yld-time-picker-dropdown-menu-disabled',
                        );
                      }
                      return (
                        <div
                          key={option.key}
                          className={className.join(' ')}
                          onClick={() => {
                            if (option.disabled) return;
                            for (let i = 0; i < timeList.length; i++) {
                              if (i === index) {
                                value[i] = option.value;
                              } else if (value[i] === undefined) {
                                value[i] = '00';
                              }
                            }
                            setValue([...value]);
                          }}
                        >
                          {option.label}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="yld-time-picker-dropdown-footer">
              <Button type="link">此刻</Button>
              <Button type="link">确定</Button>
            </div>
          </div>
        }
      />
    </div>
  );
};
