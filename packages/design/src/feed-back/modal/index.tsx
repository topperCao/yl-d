import { ReactNode, CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import { Button, Space } from '../..';
import { ButtonProps } from '../../general/button';
import { uuid } from '../../tools';
import { IconClose, IconInfoCircle } from "@yl-d/icon"
import './index.less';

export const $: any = document.querySelector.bind(document);

export interface ModalProps {
  containId?: string;
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
  footerRender?: (api: { onClose: any }) => ReactNode;
  /** 容器样式 */
  style?: CSSProperties;
  /** 确认文案 */
  okText?: string;
  /** 取消文案 */
  cancelText?: string;
  /** 主体渲染 */
  render: (api: { onClose: any }) => ReactNode;
}

const ModalRender = ({
  title = '',
  closable = true,
  onClose = () => {},
  onOk = () => {},
  mask = true,
  style = {},
  footer = true,
  footerRender,
  render = () => null,
  okText,
  cancelText,
  actions = [
    {
      label: cancelText || '取消',
      onClick: onClose,
    },
    {
      label: okText || '确定',
      onClick: onOk,
      type: 'primary',
    },
  ],
}: ModalProps) => {
  return (
    <>
      <div className="yld-modal" style={style}>
        <div className="yld-modal-header">
          <b>{title}</b>
          <IconClose onClick={onClose} />
        </div>
        <div
          className="yld-modal-body"
          style={{
            height:
              footer === false ? 'calc(100% - 50px)' : 'calc(100% - 100px)',
          }}
        >
          {render({
            onClose,
          })}
        </div>
        {footer !== false && (
          <div className="yld-modal-footer">
            {typeof footerRender === 'function'
              ? footerRender({
                  onClose,
                })
              : actions.map((item) => {
                  return (
                    <Button {...item} key={item.label}>
                      {item.label}
                    </Button>
                  );
                })}
          </div>
        )}
      </div>
      {mask && (
        <div className="yld-modal-mask" onClick={() => closable && onClose()} />
      )}
    </>
  );
};

const Modal = (props: ModalProps) => {
  return {
    open: (options: ModalProps) => {
      const containId = `modal_${uuid(6)}`;
      const modalProps = {
        ...props,
        ...options,
      };
      const closeModal = () => {
        $(`#${containId} .yld-modal`).style.top = '-9999px';
        setTimeout(() => {
          $(`#${containId}`)?.remove();
        }, 500);
      };
      const tag = document.createElement('div');
      tag.setAttribute('id', containId);
      tag.setAttribute('class', 'yld-modal-wrapper');
      $('body').appendChild(tag);
      ReactDOM.render(
        <ModalRender
          {...modalProps}
          onClose={() => {
            closeModal();
            modalProps.onClose?.();
          }}
          onOk={async () => {
            await modalProps.onOk?.(); // 等待关闭 resolve
            closeModal();
          }}
        />,
        tag,
      );
    },
  };
};

/** confirm 提示 */
Modal.confirm = ({
  title = '提示',
  content,
  onOk,
  onClose,
  okButtonProps = {
    type: 'primary',
  },
}: {
  title?: string;
  content: ReactNode;
  onOk?: Function;
  onClose?: Function;
  okButtonProps?: ButtonProps;
}) => {
  const containId = `confirm_${uuid(6)}`;
  const closeConfirm = () => {
    $(`#${containId} .yld-confirm`).style.top = '-9999px';
    setTimeout(() => {
      $(`#${containId}`)?.remove();
    }, 500);
  };
  const tag = document.createElement('div');
  tag.setAttribute('id', containId);
  tag.setAttribute('class', 'yld-confirm-wrapper');
  $('body').appendChild(tag);
  ReactDOM.render(
    <>
      <div className="yld-confirm">
        <b className="yld-confirm-title">
          <IconInfoCircle style={{ fontSize: 18, marginRight: 10, color: "#ff7d00"  }} />
          {title}
        </b>
        <div className="yld-confirm-content">{content}</div>
        <div className="yld-confirm-footer">
          <Space>
            <Button
              onClick={() => {
                closeConfirm();
              }}
            >
              取消
            </Button>
            <Button
              {...okButtonProps}
              onClick={async () => {
                await onOk?.();
                closeConfirm();
              }}
            >
              确定
            </Button>
          </Space>
        </div>
      </div>
      <div className="yld-modal-mask" />
    </>,
    tag,
  );
};

export default Modal;
