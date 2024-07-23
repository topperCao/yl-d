# 基本使用

```jsx | react
import { notification, Button, Space } from '@yl-d/design';

export default () => {
  return (
    <Space>
      <Button
        onClick={() => {
          notification.success('成功提示!');
        }}
      >
        成功提示
      </Button>
      <Button
        onClick={() => {
          notification.error('错误提示!');
        }}
      >
        错误提示
      </Button>
      <Button
        onClick={() => {
          notification.warning('警告提示!');
        }}
      >
        警告提示
      </Button>
      <Button
        onClick={() => {
          notification.normal('信息提示!');
        }}
      >
        信息提示
      </Button>
    </Space>
  );
};
```
