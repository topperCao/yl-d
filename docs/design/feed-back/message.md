## 基本使用

```jsx | react
import { message, Button, Space } from '@yl-d/design';

export default () => {
  return (
    <Space>
      <Button
        onClick={() => {
          message.success('成功提示!');
        }}
      >
        成功提示
      </Button>
      <Button
        onClick={() => {
          message.error('错误提示!');
        }}
      >
        错误提示
      </Button>
      <Button
        onClick={() => {
          message.warning('警告提示!');
        }}
      >
        警告提示
      </Button>
      <Button
        onClick={() => {
          message.normal('信息提示!');
        }}
      >
        信息提示
      </Button>
    </Space>
  );
};
```

## 自定义配置

```jsx | react
import { Message, Button, Space } from '@yl-d/design';

export default () => {
  const message = Message({
    duration: 1,
    position: 'bottomRight',
    theme: 'dark',
  });
  return (
    <Space>
      <Button
        onClick={() => {
          message.success('成功提示!');
        }}
      >
        成功提示
      </Button>
      <Button
        onClick={() => {
          message.error('错误提示!');
        }}
      >
        错误提示
      </Button>
      <Button
        onClick={() => {
          message.warning('警告提示!');
        }}
      >
        警告提示
      </Button>
      <Button
        onClick={() => {
          message.normal('信息提示!');
        }}
      >
        信息提示
      </Button>
    </Space>
  );
};
```
