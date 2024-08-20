export interface DescriptionsProps {
  /** 方向 */
  direction?: 'horizontal' | 'vertical';
  data: {
    label: string;
    value: string | number;
  }[];
}
