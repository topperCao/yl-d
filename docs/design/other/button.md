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
      <Button type="primary" loading>Loading...</Button>
    </Space>
  );
};
```

## 设置图标

```jsx | react
import { Button, Icon, Space } from '@yl-d/design';

export default () => {
  return (
    <Space>
      <Button type="primary" icon="searchicon" />
      <Button type="primary" icon="searchicon">
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
