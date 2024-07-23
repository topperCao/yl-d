## 基本使用

```jsx | react
import { Empty } from '@yl-d/design';

export default () => {
  return <Empty />;
};
```

## 自定义文案
```jsx | react
import { Empty } from '@yl-d/design';

export default () => {
  return <Empty label={'暂无数据展示'} />;
};
```

## 自定义图标

```jsx | react
import { Empty, Icon } from '@yl-d/design';

export default () => {
  return <Empty icon="searchicon" label={'查找信息为空'} />;
};
```
