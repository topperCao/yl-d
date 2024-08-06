import { useState, useEffect, CSSProperties, ReactNode } from 'react';
import './index.less';

export interface CheckBoxProps {
  /** 类名 */
  className?: string;
  /** 是否选中 */
  checked?: boolean;
  /** 改变的钩子 */
  onChange?: Function;
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 文本 */
  children?: ReactNode;
}

export default ({
  className,
  checked = false,
  disabled = false,
  onChange,
  style = {},
  children = null,
}: CheckBoxProps) => {
  const [_checked, setChecked] = useState(checked);
  const classNames = ['yld-checkbox'];
  if (_checked) {
    classNames.push('yld-checkbox-checked');
  }
  if (disabled) {
    classNames.push('yld-checkbox-disabled');
  }
  if (className) {
    classNames.push(className);
  }
  useEffect(() => {
    setChecked(checked);
  }, [checked]);
  return (
    <>
      <label className="yld-checkbox-wrapper">
        <span className={classNames.join(' ')}>
          <input
            type="checkbox"
            readOnly={disabled}
            style={style}
            checked={_checked}
            className="yld-checkbox-input"
            onChange={(e) => {
              if (disabled) return;
              setChecked(e.target.checked);
              onChange?.(e);
            }}
          />
          <span className="yld-checkbox-inner" />
          <span className="yld-checkbox-hover" />
        </span>
        <span>{children}</span>
      </label>
    </>
  );
};
