import { ReactNode, useState, useRef } from 'react';
import { Layer } from '../..';

export interface DropdownProps {
  overlay: ReactNode;
  children: ReactNode;
  layerClassName?: string;
  getPopupContainer?: () => HTMLElement;
}

export default ({
  overlay,
  children,
  layerClassName,
  getPopupContainer,
}: DropdownProps) => {
  const [open, setOpen] = useState(false); // 默认不显示
  const selectionRef = useRef<HTMLDivElement>();
  return (
    <>
      <span
        ref={selectionRef}
        style={{
          display: 'inline-block',
        }}
        onClick={() => {
          setOpen(true);
        }}
      >
        {children}
      </span>
      {open && (
        <Layer
          layerWidth="fix-content"
          layerClose={() => setOpen(false)}
          domRef={selectionRef}
          layerClassName={layerClassName}
          getPopupContainer={getPopupContainer}
        >
          {overlay}
        </Layer>
      )}
    </>
  );
};
