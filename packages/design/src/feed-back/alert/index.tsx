import { CSSProperties, ReactNode, useState } from 'react';
import {
  IconCheckCircle,
  IconExclamationCircle,
  IconQuestionCircle,
  IconCloseCircle,
  IconClose,
} from '@yl-d/icon';
import './index.less';

export interface AlertProps {
  message: ReactNode;
  closable?: Boolean;
  type?: keyof typeof iconMapping;
  style?: CSSProperties;
}

const iconMapping = {
  success: <IconCheckCircle />,
  info: <IconExclamationCircle />,
  warning: <IconQuestionCircle />,
  error: <IconCloseCircle />,
};

export default ({
  message,
  closable = false,
  type = 'info',
  style,
}: AlertProps) => {
  const [open, setopen] = useState(true);
  return (
    <>
      {open && (
        <div className={`yld-alert yld-alert-${type}`} style={style}>
          <div className="yld-alert-message">
            {iconMapping[type]}
            <span>{message}</span>
          </div>
          {closable && (
            <IconClose
              style={{ fontSize: 14 }}
              onClick={setopen.bind(null, false)}
            />
          )}
        </div>
      )}
    </>
  );
};
