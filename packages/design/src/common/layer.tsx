/**
 * 统一弹窗容器
 */
import ReactDOM from 'react-dom';
import {
  CSSProperties,
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

export interface LayerProps {
  layerClose: Function;
  layerClassName?: string;
  domRef: any;
  getPopupContainer?: () => HTMLElement;
  children: ReactNode;
  layerWidth?: string | number;
}

export default forwardRef(
  (
    {
      children,
      layerClassName,
      getPopupContainer,
      domRef,
      layerClose,
      layerWidth,
    }: LayerProps | any,
    ref,
  ) => {
    const [, setRefresh] = useState(Math.random());
    const divRef = useRef<HTMLDivElement>(document.createElement('div'));
    const className = ['yld-layer'];
    if (layerClassName) {
      className.push(layerClassName);
    }
    useImperativeHandle(ref, () => {
      return {
        render: () => {
          setRefresh(Math.random());
        },
      };
    });
    /** 创建 wrapper */
    useEffect(() => {
      /** 点击其他地方关闭 */
      const handle = (e: MouseEvent) => {
        const isOutside = !divRef.current?.contains(e.target as Node);
        if (isOutside) {
          layerClose?.();
        }
      };
      window.addEventListener('click', handle, false);
      return () => {
        window.removeEventListener('click', handle, false);
      };
    }, []);
    divRef.current.style.width = '100%';
    divRef.current.style.position = 'absolute';
    divRef.current.style.top = '0px';
    divRef.current.style.left = '0px';
    const dom = getPopupContainer?.() || document.querySelector('body');
    dom.appendChild(divRef.current);
    const style: CSSProperties = {};
    if (domRef?.current) {
      const parentRect = dom.getBoundingClientRect();
      const { width, height, left, top } =
        domRef.current.getBoundingClientRect();
      style.width = layerWidth || width;
      style.top = top + height + 4 - parentRect.top;
      style.left = left - parentRect.left;
    }
    return ReactDOM.createPortal(
      <div className={className.join(' ')} style={style}>
        {children}
      </div>,
      divRef.current,
    );
  },
);
