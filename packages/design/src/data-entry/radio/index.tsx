import { useState, useEffect, CSSProperties, ReactNode } from 'react';

export interface RadioProps {
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
  /** 单选的类型 */
  type?: 'radio' | 'button';
}

export default ({
  className,
  checked = false,
  disabled = false,
  onChange,
  style = {},
  children,
  type = 'radio',
}: RadioProps) => {
  const [_checked, setChecked] = useState(checked);
  const classNames = ['yld-radio'];
  if (_checked) {
    classNames.push('yld-radio-checked');
  }
  if (disabled) {
    classNames.push('yld-radio-disabled');
  }
  if (className) {
    classNames.push(className);
  }
  useEffect(() => {
    setChecked(checked);
  }, [checked]);
  return (
    <label className="yld-radio-wrapper">
      <span className={classNames.join(' ')}>
        <input
          type="radio"
          readOnly={disabled}
          style={style}
          checked={_checked}
          className="yld-radio-input"
          onChange={(e) => {
            if (disabled) {
              return;
            }
            setChecked(e.target.checked);
            typeof onChange === 'function' && onChange(e);
          }}
        />
        <span className="yld-radio-inner"></span>
      </span>
      <span>{children}</span>
    </label>
  );
};
