import { isValidElement, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '../..';
import './index.less';

const $: any = document.querySelector.bind(document);
const $$: any = document.querySelectorAll.bind(document);
const typeMapping = {
  1: 'message_SendSuccessfully',
  2: 'cuo',
  3: 'info_warning',
  4: 'warning',
};
const colorMapping = {
  1: '#1ac7aa',
  2: '#d81e06',
  3: '#f4ea2a',
  4: '#39a9f4',
};

export interface NotificationProps {
  title?: string;
  duration?: number;
  content?: ReactNode;
}

export default () => {
  const open = (type: number, option: NotificationProps | ReactNode) => {
    const defaultOption: NotificationProps = {
      duration: 3,
    };
    if (
      typeof option === 'object' &&
      option !== null &&
      !isValidElement(option)
    ) {
      Object.assign(defaultOption, option);
    } else {
      defaultOption.content = option;
    }
    let messageContainer = document.createElement('div');
    let length = $$('.yld-notification').length;
    messageContainer.className = 'yld-notification';
    messageContainer.style.top = 50 + length * 140 + 'px';
    messageContainer.style.top = 50 + length * 140 + 'px';
    $('body').appendChild(messageContainer);
    setTimeout(() => {
      messageContainer.remove();
    }, defaultOption.duration * 1000);
    ReactDOM.render(renderMessage(type, defaultOption), messageContainer);
  };
  const close = (node) => {
    node.target.parentNode.parentNode.parentNode.parentNode.remove();
  };
  const renderMessage = (type, option) => {
    return (
      <div className="yld-notification-content">
        <div className="yld-notification-content-header">
          <div className="yld-notification-content-header-icon">
            <Icon type={typeMapping[type]} color={colorMapping[type]} />
            <span>{option.title || "提示"}</span>
          </div>
          <div className="yld-notification-content-header-close">
            <Icon
              type="guanbi"
              onClick={(e) => {
                close(e);
              }}
            />
          </div>
        </div>
        <div className="yld-notification-content-info">{option.content}</div>
      </div>
    );
  };
  return {
    success: (option: ReactNode | NotificationProps) => {
      open(1, option);
    },
    error: (option: ReactNode | NotificationProps) => {
      open(2, option);
    },
    warning: (option: ReactNode | NotificationProps) => {
      open(3, option);
    },
    normal: (option: ReactNode | NotificationProps) => {
      open(4, option);
    },
  };
};
