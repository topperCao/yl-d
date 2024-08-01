import { ReactNode, useRef, useEffect, CSSProperties } from 'react';
import { IconLoading } from '@yl-d/icon';
import './index.less';

export interface SpinProps {
  loading?: Boolean;
  style?: CSSProperties;
  message?: ReactNode;
  children?: ReactNode;
}

export default ({ loading, style, message, children }: SpinProps) => {
  const spinMaskRef: any = useRef();
  const spinBodyRef: any = useRef();
  useEffect(() => {
    if (spinMaskRef.current && spinBodyRef.current) {
      spinMaskRef.current.style.width =
        spinBodyRef.current.firstElementChild.getBoundingClientRect().width +
        'px';
      spinMaskRef.current.style.height =
        spinBodyRef.current.firstElementChild.getBoundingClientRect().height +
        'px';
    }
    if (loading) {
      spinMaskRef.current.style.display = 'flex';
    }
  }, [loading]);
  return (
    <>
      <div className="yld-loading" style={style}>
        <div
          className="yld-loading-body"
          ref={spinBodyRef}
          style={{
            filter: loading ? 'blur(1px)' : 'none',
          }}
        >
          {children}
        </div>
        {loading && (
          <div className="yld-loading-mask" ref={spinMaskRef}>
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
