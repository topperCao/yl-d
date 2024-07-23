## 基本使用

```jsx | react
import { Tooltip } from '@yl-d/design';

export default () => {
  return (
    <Tooltip title={<>这个是一个描述信息</>}>
      Tooltip will show on mouse enter.
    </Tooltip>
  );
};
```

## 方向/主题

```jsx | react
import { Tooltip, Button } from '@yl-d/design';

export default () => {
  return (
    <>
      <Tooltip title={<>这个是一个描述信息</>} placement="top" theme={theme}>
        <Button>Top</Button>
      </Tooltip>
      &nbsp;&nbsp;&nbsp;
      <Tooltip title={<>这个是一个描述信息</>} placement="bottom" theme={theme}>
        <Button>Bottom</Button>
      </Tooltip>
      <br />
      <br />
      <br />
      <br />
      <Tooltip title={<>这个是一个描述信息</>} placement="left" theme={theme}>
        <Button>Left</Button>
      </Tooltip>
      &nbsp;&nbsp;&nbsp;
      <Tooltip title={<>这个是一个描述信息</>} placement="right" theme={theme}>
        <Button>Right</Button>
      </Tooltip>
    </>
  );
};
```
