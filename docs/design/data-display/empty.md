## 基本使用

```jsx | react
import { Empty } from '@yl-d/design';

export default () => {
  return <Empty />;
};
```

## 自定义图标和文案

```jsx | react
import { Empty } from '@yl-d/design';
import { IconLaunch } from '@yl-d/icon';

export default () => {
  return (
    <Empty icon={<IconLaunch style={{ fontSize: 50 }} />} label="前往新窗口" />
  );
};
```
