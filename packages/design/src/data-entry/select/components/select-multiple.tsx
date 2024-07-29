import { useState, useRef, useEffect } from 'react';
import { Icon, Empty, Layer } from '../../../index';
import { SelectProps } from '..';
import { promises } from 'fs-extra';

export default ({
  className,
  allowClear = true,
  placeholder = '请选择',
  disabled = false,
  style = {},
  layerClassName,
  onChange,
  getPopupContainer,
  ...rest
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(rest.options || []);
  const [value, setValue] = useState(
    Array.isArray(rest.value) ? rest.value : [],
  );
  const classNames = ['yld-select'];
  if (className) {
    classNames.push(className);
  }
  if (open) {
    classNames.push('yld-select-open');
  }
  if (disabled) {
    classNames.push('yld-select-disabled');
  }
  useEffect(() => {
    setValue(Array.isArray(rest.value) ? rest.value : []);
  }, [rest.value]);
  useEffect(() => {
    setOptions(rest.options);
  }, [rest.options]);
  const layerRef = useRef<{ render: Function }>();
  const selectionRef = useRef<HTMLDivElement>();
  const choiceRef = useRef<HTMLDivElement>();
  // 更新容器的高度
  useEffect(() => {
    if (choiceRef.current) {
      const { height } = choiceRef.current.getBoundingClientRect();
      selectionRef.current.style.height = height + 'px';
      layerRef.current?.render?.();
    }
  }, [value]);
  return (
    <>
      <div className={classNames.join(' ')} style={style}>
        <div
          ref={selectionRef}
          className="yld-select-selection yld-select-selection-multiple"
          onClick={() => {
            if (disabled) return;
            setOpen(!open);
          }}
        >
          <div className="yld-select-selection-selected-value">
            {value.length === 0 ? (
              <span style={{ color: '#aaa' }}>{placeholder}</span>
            ) : (
              <div
                className="yld-select-selection-choice-warpper"
                ref={choiceRef}
              >
                {options
                  .filter((item) => value.indexOf(item.value) > -1)
                  .map((item) => {
                    return (
                      <span
                        className="yld-select-selection-choice"
                        key={item.value}
                      >
                        {item.label}
                        <Icon
                          size={12}
                          type="guanbi"
                          onClick={(e: any) => {
                            e.stopPropagation(); // 阻止冒泡
                            let v = value.filter((i) => i !== item.value);
                            setValue([...v]);
                            onChange?.(v);
                          }}
                        />
                      </span>
                    );
                  })}
              </div>
            )}
          </div>
          <Icon type="xialadown" />
          {!disabled && allowClear && value.length > 0 && (
            <Icon
              size={14}
              type="cuo"
              onClick={async (e: any) => {
                e.stopPropagation(); // 阻止冒泡
                setValue([]); // clear
                selectionRef.current.style.height = '32px';
                await new Promise((res) => setTimeout(res, 300));
                layerRef.current?.render?.(); // refresh
                onChange?.([], null);
              }}
            />
          )}
        </div>
      </div>
      {open && (
        <Layer
          ref={layerRef}
          layerClose={() => setOpen(false)}
          layerClassName={layerClassName}
          getPopupContainer={getPopupContainer}
          domRef={selectionRef}
        >
          {options.length > 0 ? (
            options.map((option) => {
              const className = ['yld-select-dropdown-menu'];
              if (value.indexOf(option.value) > -1) {
                className.push('yld-select-dropdown-menu-selected');
              }
              if (option.disabled) {
                className.push('yld-select-dropdown-menu-disabled');
              }
              return (
                <div
                  key={option.value}
                  className={className.join(' ')}
                  onClick={() => {
                    if (option.disabled) return;
                    // 没有则添加，有则删除
                    let index = value.indexOf(option.value);
                    if (index === -1) {
                      value.push(option.value);
                    } else {
                      value.splice(index, 1);
                    }
                    setValue([...value]);
                    typeof onChange === 'function' &&
                      onChange([...value], option);
                  }}
                >
                  {option.label}
                  <Icon size={12} type="duihao" />
                </div>
              );
            })
          ) : (
            <Empty />
          )}
        </Layer>
      )}
    </>
  );
};
