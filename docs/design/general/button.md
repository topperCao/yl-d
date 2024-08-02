## 基本使用

```jsx | react
import { Button, Space } from '@yl-d/design';

export default () => {
  return (
    <Space>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
      <Button type="primary" ghost>
        ghost
      </Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading...</Button>
    </Space>
  );
};
```

## 设置图标

```jsx | react
import { Button, Space } from '@yl-d/design';
import { IconRefresh, IconSearch } from '@yl-d/icon';

export default () => {
  return (
    <Space>
      <Button icon={<IconRefresh />} />
      <Button type="primary" icon={<IconSearch />}>
        Search
      </Button>
    </Space>
  );
};
```

## 自动等待

```jsx | react
import { Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        return new Promise((res) => setTimeout(res, 1000));
      }}
    >
      提交表单
    </Button>
  );
};
```

## 二次确认

```jsx | react
import { Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      type="primary"
      confirm={{
        content: '是否确认删除该数据？',
      }}
      onClick={() => {
        return new Promise((res) => setTimeout(res, 1000));
      }}
    >
      提交表单
    </Button>
  );
};
```

## API

```API
/packages/design/src/general/button/type.tsx
```