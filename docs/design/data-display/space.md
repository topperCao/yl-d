## 基本使用

```jsx | react
import { Space } from '@yl-d/design';

export default () => {
  return (
    <Space>
      <button>描述1</button>
      <button>描述2</button>
      <button>描述3</button>
    </Space>
  );
};
```

## 垂直使用

```jsx | react
import { Space } from '@yl-d/design';

export default () => {
  return (
    <Space gap={12} direction="vertical">
      <button>描述1</button>
      <button>描述2</button>
      <button>描述3</button>
    </Space>
  );
};
```
