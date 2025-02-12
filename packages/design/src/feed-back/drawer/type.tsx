import { ReactNode, CSSProperties } from "react";

export interface DrawerProps {
  containId?: string;
  /** 方向 */
  placement?: 'left' | 'right';
  /** 距离顶部距离 */
  top?: number;
  /** 宽度 */
  width?: number | string;
  /** 标题 */
  title?: ReactNode;
  /** 是否有遮罩 */
  mask?: boolean;
  /** 点击遮罩是否带关闭 */
  closable?: boolean;
  /** 关闭的钩子 */
  onClose?: Function;
  /** 确认的钩子 */
  onOk?: Function;
  /** 底部按钮配置 */
  actions?: any[];
  /** 是否展示底部 */
  footer?: boolean;
  /** 自定义渲染底部 */
  footerRender?: (api: { onClose: Function }) => ReactNode;
  /** 容器样式 */
  style?: CSSProperties;
  /** 确认文案 */
  okText?: string;
  /** 取消文案 */
  cancelText?: string;
  className?: string;
  /** 主体渲染 */
  render?: (api: { onClose: Function }) => ReactNode;
}