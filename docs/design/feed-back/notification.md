# 基本使用

```jsx | react
import { Notification, Button, Space } from '@yl-d/design';

export default () => {
  return (
    <Space>
      <Button
        onClick={() => {
          Notification.success('成功提示!');
        }}
      >
        成功提示
      </Button>
      <Button
        onClick={() => {
          Notification.error('错误提示!');
        }}
      >
        错误提示
      </Button>
      <Button
        onClick={() => {
          Notification.warning('警告提示!');
        }}
      >
        警告提示
      </Button>
      <Button
        onClick={() => {
          Notification.normal('信息提示!');
        }}
      >
        信息提示
      </Button>
    </Space>
  );
};
```
