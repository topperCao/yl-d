import { CSSProperties, ReactNode, useEffect, useState } from 'react';
import AddonAfter from './components/addon-after';
import AddonBefore from './components/addon-before';
import Input from './components/input';
import TextArea from './components/text-area';
import './index.less';

export interface InputProps {
  /** 样式 */
  style?: CSSProperties;
  /** 类型 */
  type?: 'textarea' | 'password';
  /** 类名 */
  className?: string;
  /** 前缀 */
  addonBefore?: ReactNode;
  /** 后缀 */
  addonAfter?: ReactNode;
  /** 值 */
  value?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读 */
  readOnly?: boolean;
  /** 提示文案 */
  placeholder?: string;
  /** 最大长度 */
  maxLength?: number;
  /** 改变钩子 */
  onChange?: Function;
  /** 失去焦点钩子 */
  onBlur?: Function;
  /** 得到焦点钩子 */
  onFocus?: Function;
  /** 回车钩子 */
  onPressEnter?: Function;
  /** 是否允许清空 */
  allowClear?: boolean;
  /** 清空钩子 */
  onAllowClear?: Function;
  /** 小前缀 */
  prefix?: ReactNode;
  /** 小后缀 */
  suffix?: ReactNode;
  /** 是否展示计数 */
  showCount?: boolean;
  /** 点击 */
  onClick?: any;
}

export default ({
  className,
  value,
  onChange = () => {},
  allowClear = true,
  ...props
}: InputProps) => {
  const [innerValue, setInnerValue] = useState(value);
  // 同步外部更新
  useEffect(() => {
    setInnerValue(value || '');
  }, [value]);
  const classNames = [
    props.type === 'textarea' ? 'yld-textarea-wrapper' : 'yld-input-wrapper',
  ];
  // 是否展示清空按钮
  const showAllowClear = !props.disabled && allowClear && innerValue?.length > 0;
  if (showAllowClear) {
    classNames.push('yld-input-allowClear');
  }
  if (className) {
    classNames.push(className);
  }
  return props.type === 'textarea' ? (
    <span style={props.style} className={classNames.join(' ')}>
      <TextArea
        {...props}
        value={innerValue}
        allowClear={allowClear}
        onChange={(e) => {
          setInnerValue(e);
          onChange(e);
        }}
      />
    </span>
  ) : (
    <span style={props.style} className={classNames.join(' ')}>
      <AddonBefore addon={props.addonBefore} />
      <Input
        {...props}
        value={innerValue}
        allowClear={allowClear}
        onChange={(e) => {
          setInnerValue(e);
          onChange(e);
        }}
      />
      <AddonAfter addon={props.addonAfter} />
    </span>
  );
};
