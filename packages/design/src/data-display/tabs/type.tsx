import { CSSProperties, ReactNode } from "react";

export interface TabsProps {
  style?: CSSProperties;
  closable?: boolean;
  onClick?: Function;
  onRemove?: Function;
  activeKey?: string;
  tabs: {
    key: string;
    label: ReactNode;
    content?: ReactNode;
  }[];
}