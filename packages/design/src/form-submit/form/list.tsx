import { IconDelete, IconPlus } from '@yl-d/icon';
import React, { useEffect, useState } from 'react';
import { Button, Form, FormItemProps } from '../..';

export interface FormListProps {
  column: 1 | 2 | 3 | 4;
  title?: string;
  maxCount?: number;
  leastOne?: boolean;
  children: FormItemProps[];
  [key: string]: any;
}

export default ({
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
        return item.__isDelete__ ? null : (
          <div className="yld-form-list-item">
            <div className="yld-form-list-item-head">
              <h4>
                {title}-{index + 1}
              </h4>
              <Button
                icon={<IconDelete />}
                circle
                onClick={() => {
                  value[index].__isDelete__ = true;
                  setValue([...value]);
                }}
              />
            </div>
            <div className="yld-form-list-item-body">
              <Form schema={children} column={column} initialValues={item} />
            </div>
          </div>
        );
      })}
      <Button
        icon={<IconPlus />}
        type="dashed"
        style={{
          width: '100%',
          marginTop: 12,
        }}
        onClick={() => {
          setValue([...value, {}]);
        }}
      />
    </div>
  );
};
