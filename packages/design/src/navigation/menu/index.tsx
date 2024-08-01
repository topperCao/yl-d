import { CSSProperties, ReactNode } from 'react';
import MenuVerical from './components/menu-vertical';

interface SubMenus {
  key: string;
  icon?: ReactNode;
  label?: string;
  children?: SubMenus[];
}

export interface MenuProps {
  menus: SubMenus[];
  openKey?: any[];
  selectKey?: any;
  menuClick?: Function;
  style?: CSSProperties;
  collapsed?: boolean;
  collapsedWidth?: number;
}

export default (props: MenuProps) => {
  return <MenuVerical {...props} />;
};
