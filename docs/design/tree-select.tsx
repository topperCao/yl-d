import { useState, useEffect, useRef } from 'react';
import { IconDown, IconClose } from '@yl-d/icon';
import { Empty, Layer, Tree } from '@yl-d/design';

const getLabelByValue = (key: string | string[], treeData = []) => {
  if (key === undefined) {
    return undefined;
  }
  const values = typeof key === 'string' ? [key] : key;
  let title = [];
  const loop = (options = []) => {
    options.forEach((item) => {
      if (values.includes(item.key)) {
        title.push(item);
      }
      if (Array.isArray(item.children)) {
        loop(item.children);
      }
    });
  };
  loop(treeData);
  return typeof key === 'string'
    ? title[0]?.title
    : title?.length > 0
    ? title
    : undefined;
};

export default ({
  allowClear = true,
  placeholder = '请选择',
  disabled = false,
  style = {},
  className,
  layerClassName,
  getPopupContainer,
  onChange,
  fieldNames,
  ...rest
}) => {
  const selectionRef = useRef<HTMLDivElement>();
  const [open, setOpen] = useState(false);
  // 设置数据源
  const [options, setOptions] = useState(rest.treeData);
  const [value, setValue] = useState<any>(rest.value); // 内部存选中值容器
  useEffect(() => {
    setValue(rest.value);
  }, [rest.value]);
  const classNames = ['yld-tree-select'];
  if (open) {
    classNames.push('yld-tree-select-open');
  }
  // 是否展示清空按钮
  const showAllowClear = !disabled && allowClear && value?.length > 0;
  if (showAllowClear) {
    classNames.push('yld-tree-select-allowClear');
  }
  if (disabled) {
    classNames.push('yld-tree-select-disabled');
  }
  if (className) {
    classNames.push(className);
  }
  /** 展示选中的 tag */
  const tags = getLabelByValue(value, options);
  const tagRender = Array.isArray(tags)
    ? tags.map((tag) => {
        return (
          <div key={tag.key} className="yld-tree-select-selection-value-tag">
            {tag.title}
            <IconClose
              style={{ fontSize: 12 }}
              onClick={(e: any) => {
                e.stopPropagation(); // 阻止冒泡
                let v = value.filter((i) => i !== tag.key);
                setValue([...v]);
                onChange?.(v);
              }}
            />
          </div>
        );
      })
    : tags;
  return (
    <div className={classNames.join(' ')} style={style}>
      <div
        ref={selectionRef}
        className="yld-tree-select-selection"
        onClick={() => {
          if (disabled) return;
          setOpen(!open);
        }}
      >
        <div className="yld-tree-select-selection-value">
          {tags === undefined ? (
            <span style={{ color: '#aaa' }}>{placeholder}</span>
          ) : (
            tagRender
          )}
        </div>
        <IconDown />
        {showAllowClear && (
          <IconClose
            style={{ fontSize: 12 }}
            onClick={(e: any) => {
              e.stopPropagation(); // 阻止冒泡
              setValue([]); // 还原
              onChange?.([]);
              setOpen(false);
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
          <div className="yld-tree-select-dropdown" style={style}>
            {options.length > 0 ? (
              <Tree
                {...rest}
                selectedKey={value}
                checkedKeys={value}
                treeData={options}
                onSelected={(v) => {
                  setValue(v);
                  onChange(v);
                  setOpen(false);
                }}
                onCheck={(v) => {
                  setValue(v);
                  onChange(v);
                }}
              />
            ) : (
              <Empty label="暂无数据" />
            )}
          </div>
        </Layer>
      )}
    </div>
  );
};
