import { ReactNode } from 'react';

export interface TimelineProps {
  items: {
    color?: string;
    dot?: boolean;
    title: ReactNode;
  }[];
}
