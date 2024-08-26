import { IconDelete, IconPlus } from '@yl-d/icon';
import { memo, useEffect, useState } from 'react';
import { Button, Form, FormItemProps } from '../..';

export interface FormListProps {
  column: 1 | 2 | 3 | 4;
  title?: string;
  maxCount?: number;
  leastOne?: boolean;
  children: FormItemProps[];
  [key: string]: any;
}

export default memo(({
  title = '',
  children = [],
  column = 1,
  maxCount = 5,
  leastOne = false,
  onChange,
  form,
  ...rest
}: FormListProps) => {
  const [value, setValue] = useState(rest.value || []);
  useEffect(() => {
    setValue(rest.value || []);
  }, [rest.value]);
  return (
    <div className="yld-form-list">
      {value?.map((item: any, index: number) => {
        return (
          <div className="yld-form-list-item">
            <div className="yld-form-list-item-head">
              <h4>
                {title}-{index + 1}
              </h4>
              <Button
                icon={<IconDelete />}
                circle
                onClick={() => {
                  value.splice(index, 1);
                  setValue([...value]);
                  onChange(value);
                }}
              />
            </div>
            <div className="yld-form-list-item-body">
              <Form
                schema={children}
                column={column}
                initialValues={item}
                onValuesChange={(v, vs) => {
                  Object.assign(item, vs);
                  onChange([...value]);
                }}
              />
            </div>
          </div>
        );
      })}
      <Button
        icon={<IconPlus />}
        type="dashed"
        style={{
          width: '100%',
          marginTop: 20,
        }}
        onClick={() => {
          setValue([...value, {}]);
        }}
      />
    </div>
  );
}, () => true);
