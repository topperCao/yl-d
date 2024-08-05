import { CSSProperties, ReactNode } from "react";

export interface StepsProps {
  /** 当前步骤 */
  current?: number;
  /** 样式 */
  style?: CSSProperties;
  /** 数据源 */
  items: {
    title: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
  }[];

};

export default (props: StepsProps) => null;