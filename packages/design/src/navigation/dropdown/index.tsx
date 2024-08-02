import { ReactNode, useState, useRef } from 'react';
import { Layer } from '../..';

export interface DropdownProps {
  droplist: ReactNode;
  children: ReactNode;
  layerClassName?: string;
  getPopupContainer?: () => HTMLElement;
}

export default ({
  droplist,
  children,
  layerClassName,
  getPopupContainer,
}: DropdownProps) => {
  const [open, setOpen] = useState(false); // 默认不显示
  const selectionRef = useRef<HTMLDivElement>();
  return (
    <>
      <span ref={selectionRef} onMouseEnter={() => setOpen(true)}>
        {children}
      </span>
      {open && (
        <Layer
          layerWidth="fix-content"
          layerClick={() => setOpen(false)}
          layerClose={() => setOpen(false)}
          domRef={selectionRef}
          layerClassName={layerClassName}
          getPopupContainer={getPopupContainer}
        >
          {droplist}
        </Layer>
      )}
    </>
  );
};
