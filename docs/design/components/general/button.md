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