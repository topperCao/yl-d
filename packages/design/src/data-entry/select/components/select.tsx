import { useState, useEffect, useRef } from 'react';
import { SelectProps } from '..';
import { Icon, Empty, Layer } from '../../..';

export default ({
  allowClear = true,
  placeholder = '请选择',
  disabled = false,
  style = {},
  className,
  layerClassName,
  getPopupContainer,
  onChange,
  onSearch,
  showSearch = false,
  filter,
  ...rest
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(rest.options || []);
  const [value, setValue] = useState(rest.value);
  const [keyword, setKeyword] = useState('');
  const selected: any = options.find((item) => item.value === value) || {};
  // 默认支持模糊查询
  if (showSearch && filter === undefined) {
    filter = ({ label }, value: string) => {
      return label.toLowerCase().includes(value.trim().toLowerCase());
    };
  }
  useEffect(() => {
    setValue(rest.value);
  }, [rest.value]);
  useEffect(() => {
    setOptions(rest.options);
  }, [rest.options, open]);
  const classNames = ['yld-select'];
  if (className) {
    classNames.push(className);
  }
  if (disabled) {
    classNames.push('yld-select-disabled');
  }
  useEffect(() => {
    if (open === false) {
      // 重制
      setKeyword(undefined);
      setOptions(options);
    }
  }, [open]);
  const selectionRef = useRef<HTMLDivElement>();
  return (
    <div className={classNames.join(' ')} style={style}>
      <div
        ref={selectionRef}
        className="yld-select-selection"
        onClick={() => {
          if (disabled) return;
          setOpen(!open);
        }}
      >
        <div className="yld-select-selection-selected-value">
          {showSearch && open ? (
            <input
              value={keyword}
              disabled={disabled}
              autoFocus
              className="yld-select-selection-selected-input"
              placeholder={selected.label || placeholder}
              onClick={(e) => {
                if (open) {
                  e.stopPropagation();
                }
              }}
              onChange={(e) => {
                setKeyword(e.target.value);
                if (e.target.value.trim() !== '') {
                  setOptions(
                    rest.options.filter((option) =>
                      filter?.(option, e.target.value),
                    ),
                  );
                } else {
                  setOptions(rest.options);
                }
                onSearch?.(e.target.value);
              }}
            />
          ) : selected.value === undefined ? (
            <span style={{ color: '#aaa' }}>{placeholder}</span>
          ) : (
            selected.label
          )}
        </div>
        <Icon type="xialadown" />
        {!disabled && allowClear && selected.value !== undefined && (
          <Icon
            type="cuo"
            onClick={(e: any) => {
              e.stopPropagation(); // 阻止冒泡
              setValue(undefined);
              onChange?.(undefined, undefined);
            }}
          />
        )}
      </div>
      {open && (
        <Layer
          domRef={selectionRef}
          layerClose={() => {
            setOpen(false);
          }}
          getPopupContainer={getPopupContainer}
          layerClassName={layerClassName}
        >
          {options.length > 0 ? (
            options.map((option) => {
              let className = ['yld-select-dropdown-menu'];
              if (option.value === value) {
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
                    if (!option.disabled) {
                      setValue(option.value);
                      onChange?.(option.value, option);
                      setOpen(false);
                    }
                  }}
                >
                  {option.label}
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
