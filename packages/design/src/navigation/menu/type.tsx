import { CSSProperties, ReactNode } from 'react';

interface SubMenus {
  path: string;
  icon?: ReactNode;
  label?: string;
  children?: SubMenus[];
}

export interface MenuProps {
  menus: SubMenus[];
  openKey?: string[];
  selectKey?: string;
  menuClick?: Function;
  style?: CSSProperties;
  collapsed?: boolean;
  collapsedWidth?: number;
}

export default (props: MenuProps) => null;
