## 基本使用

```jsx | react
import { Steps } from '@yl-d/design';

export default () => {
  return (
    <Steps
      current={2}
      items={[
        {
          title: 'Succeeded',
          description: 'This is a description',
        },
        {
          title: 'Processing',
          description: 'This is a description',
        },
        {
          title: 'Pending',
          description: 'This is a description',
        },
      ]}
    />
  );
};
```

## 自定义图标

```jsx | react
import { Steps } from '@yl-d/design';
import { IconHome, IconLoading, IconThumbUp } from '@yl-d/icon';

export default () => {
  return (
    <Steps
      current={2}
      items={[
        {
          icon: <IconHome />,
          title: 'Succeeded',
          description: 'This is a description',
        },
        {
          icon: <IconLoading />,
          title: 'Processing',
          description: 'This is a description',
        },
        {
          icon: <IconThumbUp />,
          title: 'Padding',
          description: 'This is a description',
        },
      ]}
    />
  );
};
```

## API

```API
/packages/design/src/navigation/steps/type.tsx
```