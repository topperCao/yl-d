import { useState, useEffect, ReactNode } from 'react';

export interface RadioProps {
  /** 是否选中 */
  checked?: boolean;
  /** 改变的钩子 */
  onChange?: Function;
  /** 是否禁用 */
  disabled?: boolean;
  /** 文本 */
  children?: ReactNode;
}

export default ({
  checked = false,
  disabled = false,
  onChange,
  children,
}: RadioProps) => {
  const [_checked, setChecked] = useState(checked);
  const classNames = ['yld-radio'];
  if (_checked) {
    classNames.push('yld-radio-checked');
  }
  if (disabled) {
    classNames.push('yld-radio-disabled');
  }
  useEffect(() => {
    setChecked(checked);
  }, [checked]);
  return (
    <label className={checked ? "yld-radio-wrapper yld-radio-wrapper-checked" : "yld-radio-wrapper"}>
      <span className={classNames.join(' ')}>
        <input
          type="radio"
          readOnly={disabled}
          checked={_checked}
          className="yld-radio-input"
          onChange={(e) => {
            if (disabled) {
              return;
            }
            setChecked(e.target.checked);
            onChange?.(e);
          }}
        />
        <span className="yld-radio-inner"></span>
      </span>
      <span>{children}</span>
    </label>
  );
};
