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
} from 'react';

export interface LayerProps {
  open: boolean;
  layerClose: Function;
  layerClassName?: string;
  domRef: any;
  getPopupContainer?: () => HTMLElement;
  content: ReactNode;
  layerWidth?: string | number;
}

export default forwardRef(
  (
    {
      content = null,
      layerClassName,
      getPopupContainer,
      domRef,
      open,
      layerClose,
      layerWidth,
    }: LayerProps | any,
    ref,
  ) => {
    const divRef = useRef<HTMLDivElement>(document.createElement('div'));
    const className = ['yld-layer'];
    if (layerClassName) {
      className.push(layerClassName);
    }
    // clear 重新渲染下
    useEffect(() => {
      render();
    }, [content]);
    /** 渲染 layer */
    const render = (selectHeight?: number) => {
      if (open) {
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
          style.top =
            top + (selectHeight ? selectHeight : height) + 4 - parentRect.top;
          style.left = left - parentRect.left;
        }
        ReactDOM.render(
          <div className={className.join(' ')} style={style}>
            {content}
          </div>,
          divRef.current,
        );
      }
    };
    useImperativeHandle(ref, () => {
      return {
        render,
      };
    });
    /** 创建 wrapper */
    useEffect(() => {
      if (!open) {
        divRef.current && divRef.current.remove();
      }
      /** 点击其他地方关闭 */
      const handle = (e: MouseEvent) => {
        const isOutside = !divRef.current?.contains(e.target as Node);
        if (isOutside && open) {
          layerClose?.();
        }
      };
      window.addEventListener('click', handle, false);
      return () => {
        window.removeEventListener('click', handle, false);
      };
    }, [open]);
    // hash 改变 卸载
    useEffect(() => {
      window.addEventListener(
        'hashchange',
        () => {
          divRef.current && divRef.current.remove();
        },
        { once: true },
      );
    }, []);
    return null;
  },
);
