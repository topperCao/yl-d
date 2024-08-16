import { ReactNode, CSSProperties } from 'react';
import { IconLoading } from '@yl-d/icon';
import './index.less';

export interface SpinProps {
  loading?: Boolean;
  style?: CSSProperties;
  message?: ReactNode;
  children?: ReactNode;
}

export default ({ loading, style = {}, message, children }: SpinProps) => {
  return (
    <>
      <div className="yld-loading" style={style}>
        <div
          className="yld-loading-body"
          style={{
            filter: loading ? 'blur(1px)' : 'none',
          }}
        >
          {children}
        </div>
        {loading && (
          <div className="yld-loading-mask">
            <div className="yld-loading-mask-spin">
              <IconLoading />
            </div>
            {message && (
              <span className="yld-loading-mask-message">{message}</span>
            )}
          </div>
        )}
      </div>
    </>
  );
};
