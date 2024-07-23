## 基本使用

```jsx | react
import { Badge, Icon, Space } from '@yl-d/design';

export default () => {
  return (
    <Space>
      <Badge count={2}>Default</Badge>
      <Badge count={2} color="#1890ff">
        Blue
      </Badge>
      <Badge count={2} color="red">
        Red
      </Badge>
      <Badge dot>Dot</Badge>
      <Badge
        color="transparent"
        count={<Icon color="red" type="password-visible" />}
      >
        Icon
      </Badge>
    </Space>
  );
};
```
