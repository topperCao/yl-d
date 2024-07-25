## 基本使用

```jsx | react
import { Modal, Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        Modal({
          title: '默认弹出层',
          style: {
            width: 600,
            height: 400,
          },
          okText: '完成',
          onClose() {
            console.log('onClose');
          },
          onOk() {
            console.log('onOk');
            return new Promise((res) => setTimeout(res, 1000));
          },
          render({ onClose }) {
            console.log('render');
            return (
              <>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <br />
                <br />
                <a onClick={onClose}>点击关闭</a>
              </>
            );
          },
        }).open();
      }}
    >
      默认弹出层
    </Button>
  );
};
```

## 没有底部按钮

```jsx | react
import { Modal, Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        Modal({
          title: '没有底部按钮',
          style: {
            width: 600,
            height: 400,
          },
          mask: false,
          render() {
            return (
              <>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </>
            );
          },
          footer: false,
        }).open();
      }}
    >
      没有底部按钮
    </Button>
  );
};
```

## 自定义底部渲染

```jsx | react
import { Modal, Button } from '@yl-d/design';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        Modal({
          title: '自定义底部渲染',
          style: {
            width: 600,
            height: 400,
          },
          mask: false,
          render() {
            return (
              <>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </>
            );
          },
          footerRender({ onClose }) {
            return (
              <div>
                自定义渲染底部
                <button onClick={onClose}>关闭</button>
              </div>
            );
          },
        }).open();
      }}
    >
      自定义底部渲染
    </Button>
  );
};
```
