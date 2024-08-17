import { ReactNode } from 'react';

export interface BadgeProps {
  color?: string;
  count?: number;
  dot?: boolean;
  title?: ReactNode;
  children: ReactNode;
}
