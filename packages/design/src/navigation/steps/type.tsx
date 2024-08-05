import { CSSProperties, ReactNode } from "react";

export interface StepsProps {
  current?: number;
  style?: CSSProperties;
  items: {
    title: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
  }[];

};

export default (props: StepsProps) => null;