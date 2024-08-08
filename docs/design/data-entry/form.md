## 基本使用

```jsx | react
import { useState } from 'react';
import { Switch, Form, Button } from '@yl-d/design';
import schema from '@/design/schema.tsx';

export default () => {
  const form = Form.useForm();
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <Switch
        checkedChildren="启用"
        unCheckedChildren="禁用"
        checked={!disabled}
        onChange={setDisabled.bind(null, !disabled)}
      />
      <br />
      <br />
      <Form
        form={form}
        disabled={disabled}
        column={2}
        initialValues={{
          input: '2323',
          autoComplete: '2323@163.com',
          inputNumber: 2323,
          select: 1,
          switch: false,
          radio: 1,
          checkbox: [1],
          slider: 7,
          selectMore: [1, 2],
          cascader: ['zhejiang', 'hangzhou'],
          datePicker: '2024-07-24',
          datePickerRange: ['2024-07-24', '2026-07-23'],
          timePicker: '00:02:00',
          timePickerRange: ['12:08:08', '18:08:08'],
          textarea: '2323',
          rate: 2,
          treeSelect: 'node2'
        }}
        onValuesChange={(v, vs) => {
          console.log(v, vs);
        }}
        schema={schema.map((i) => {
          return {
            ...i,
            required: true,
          };
        })}
      />
      <Button
        type="primary"
        style={{ marginTop: 24 }}
        onClick={async () => {
          console.log(await form.validateFields());
          await new Promise((res) => setTimeout(res, 1000));
        }}
      >
        提交
      </Button>
    </>
  );
};
```

## 表单项联动

```jsx | react
import { Form } from '@yl-d/design';

export default () => {
  return (
    <Form
      schema={[
        {
          type: 'RadioGroup',
          name: 'sex',
          label: '性别',
          notifiRender: [
            {
              name: 'age',
              clear: true,
            },
          ],
          props: {
            options: [
              {
                label: '男',
                value: 0,
              },
              {
                label: '女',
                value: 1,
              },
            ],
          },
        },
        {
          type: 'InputNumber',
          name: 'age',
          label: '年龄',
          visible({ getValues }) {
            return getValues().sex === 0;
          },
          props: {
            style: {
              width: 180,
            },
          },
        },
      ]}
    />
  );
};
```

## 动态修改模型

```jsx | react
import { Form } from '@yl-d/design';

export default () => {
  const form = Form.useForm();
  return (
    <Form
      form={form}
      schema={[
        {
          type: 'RadioGroup',
          name: 'sex',
          label: '性别',
          props: {
            onChange(value, option) {
              form.mergeItemByName('sex', {
                label: `性别-${option.label}`,
              });
            },
            options: [
              {
                label: '男',
                value: 0,
              },
              {
                label: '女',
                value: 1,
              },
            ],
          },
        },
      ]}
    />
  );
};
```

## 自定义表单组件

```jsx | react
import { Form } from '@yl-d/design';

export default () => {
  return (
    <Form
      initialValues={{
        name: '自定义',
      }}
      schema={[
        {
          type: ({ value, onChange }) => {
            return <input value={value} onChange={onChange} />;
          },
          name: 'name',
          label: '自定义',
        },
      ]}
    />
  );
};
```
