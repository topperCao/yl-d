/**
 * 统一弹窗容器
 */
import ReactDOM from 'react-dom';
import './layer.less';
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
  layerClick?: Function;
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
      layerClick,
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
      const handleClick = (e: MouseEvent) => {
        const isContains = divRef.current?.contains(e.target as Node);
        if (isContains) {
          layerClick?.();
        }
      };
      window.addEventListener('click', handleClick, true);
      window.addEventListener('click', handle);
      return () => {
        window.removeEventListener('click', handleClick, true);
        window.removeEventListener('click', handle);
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
    useEffect(() => {
      // 移除dom
      return () => {
        divRef.current.remove();
      };
    }, []);
    return ReactDOM.createPortal(
      <div className={className.join(' ')} style={style}>
        {children}
      </div>,
      divRef.current,
    );
  },
);
