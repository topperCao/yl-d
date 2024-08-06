import { useState, useRef } from 'react';
import { DropdownProps } from './type';
import { Layer } from '../..';
import "./index.less";

export default ({
  droplist,
  children,
  layerClassName,
  trigger = 'hover',
  getPopupContainer,
}: DropdownProps) => {
  const [open, setOpen] = useState(false); // 默认不显示
  const selectionRef = useRef<HTMLDivElement>();
  const hoverRef = useRef(false);
  const onMouseLeave = () => {
    if (trigger === 'hover') {
      hoverRef.current = false;
      setTimeout(() => {
        if (!hoverRef.current) {
          setOpen(false);
        }
      }, 500);
    }
  };
  const onMouseEnter = () => {
    console.log("onMouseEnter");
    if (trigger === 'hover') {
      hoverRef.current = true;
      setTimeout(() => {
        if (hoverRef.current) {
          setOpen(true);
        }
      }, 500);
    }
  };
  return (
    <>
      <span
        className={open ? 'yld-drop-down yld-drop-down-open' : 'yld-drop-down'}
        ref={selectionRef}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        onContextMenu={(e) => {
          if(trigger === 'contextMenu'){
            e.preventDefault();
            setOpen(true);
          }
        }}
        onClick={() => {
          if (trigger === 'click') {
            setOpen(true);
          }
        }}
      >
        {children}
      </span>
      {open && (
        <Layer
          layerWidth="fix-content"
          layerClick={() => setOpen(false)}
          layerClose={() => setOpen(false)}
          layerMouseLeave={trigger === 'hover' && onMouseLeave}
          layerMouseEnter={trigger === 'hover' && onMouseEnter}
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
