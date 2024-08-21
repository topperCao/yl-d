import { useRef } from 'react';
import { Button, Form, Space } from '../..';
import { FormProps } from '../form/type.form';
import { IconSearch } from '@yl-d/icon';
import './index.less';

export interface SearchProps extends FormProps {
  onReset?: Function;
  onSearch?: Function;
}

export default ({
  onReset = () => {},
  onSearch = () => {},
  column = 4,
  schema = [],
  horizontal = true,
  ...rest
}: SearchProps) => {
  const loadingRef = useRef<boolean>(false);
  const form = rest.form || Form.useForm();
  const _schema = typeof schema === 'function' ? schema(form) : schema;
  return (
    <Form
      horizontal={horizontal}
      form={form}
      className="yld-search"
      column={column}
      schema={[
        ..._schema,
        {
          className: 'yld-search-flex-btn',
          style: {
            gridColumn: column,
          },
          type() {
            return (
              <Space>
                <Button
                  onClick={async () => {
                    if (loadingRef.current) {
                      return;
                    }
                    try {
                      loadingRef.current = true;
                      form.clearValues({});
                      await onReset?.();
                    } catch (error) {
                      console.log(error);
                    } finally {
                      loadingRef.current = false;
                    }
                  }}
                >
                  重置
                </Button>
                <Button
                  type="primary"
                  icon={<IconSearch />}
                  onClick={async () => {
                    try {
                      if (loadingRef.current) {
                        return;
                      }
                      const values = await form.validateFields();
                      await onSearch?.(values);
                    } catch (error) {
                      console.log(error);
                    } finally {
                      loadingRef.current = false;
                    }
                  }}
                >
                  查询
                </Button>
              </Space>
            );
          },
        } as any,
      ]}
    />
  );
};
