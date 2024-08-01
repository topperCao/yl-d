## 基本使用

```jsx | react
import { Message, Button, Space } from '@yl-d/design';

export default () => {
  return (
    <Space>
      <Button
        onClick={() => {
          Message.success('成功提示!');
        }}
      >
        成功提示
      </Button>
      <Button
        onClick={() => {
          Message.error('错误提示!');
        }}
      >
        错误提示
      </Button>
      <Button
        onClick={() => {
          Message.warning('警告提示!');
        }}
      >
        警告提示
      </Button>
      <Button
        onClick={() => {
          Message.normal('信息提示!');
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
import { IconSearch } from '@yl-d/icon';

export default () => {
  return (
    <Space>
      <Button
        onClick={() => {
          Message.success({
            icon: <IconSearch style={{ color: 'var(--primary-color)' }} />,
            content: '正在查找...',
          });
        }}
      >
        自定义icon
      </Button>
      <Button
        onClick={() => {
          Message.success({
            closable: true,
            content: '手动控制关闭',
          });
        }}
      >
        手动控制关闭
      </Button>
      <Button
        onClick={() => {
          const closeMsg = Message.loading('数据请求中...');
          setTimeout(closeMsg, 2000);
        }}
      >
        加载中
      </Button>
      <Button
        onClick={() => {
          Message.success({
            position: 'bottom',
            content: '在右下方弹出',
            closable: true,
          });
        }}
      >
        下方弹出
      </Button>
    </Space>
  );
};
```
