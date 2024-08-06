## 基本使用

```jsx | react
import { Tree } from '@yl-d/design';

export default () => {
  const treeData = [
    {
      key: '1',
      label: 'Parent1',
      children: [
        {
          key: '1-1',
          label: 'node1',
          children: [
            {
              key: '1-2-1',
              label: 'sub-node1',
              disabled: true,
            },
            {
              key: '1-2-2',
              label: 'sub-node2',
            },
          ],
        },
        {
          key: '1-2',
          label: 'node2',
        },
      ],
    },
    {
      key: '2',
      label: 'Parent2',
      children: [
        {
          key: '2-1',
          label: 'node1',
        },
        {
          key: '2-2',
          label: 'node2',
        },
      ],
    },
    {
      key: '3',
      label: 'Parent3',
      children: [
        {
          key: '3-1',
          label: 'node1',
        },
        {
          key: '3-2',
          label: 'node2',
        },
      ],
    },
  ];
  return (
    <Tree
      style={{
        width: 200,
      }}
      treeData={treeData}
      expandedKeys={['1']}
      onSelected={(e) => {
        console.log('onSelected', e);
      }}
    />
  );
};
```

## 可选择

```jsx | react
import { Tree } from '@yl-d/design';

export default () => {
  const treeData = [
    {
      key: '1',
      label: 'Parent1',
      children: [
        {
          key: '1-1',
          label: 'node1',
          children: [
            {
              key: '1-2-1',
              label: 'sub-node1',
              disabled: true,
            },
            {
              key: '1-2-2',
              label: 'sub-node2',
            },
          ],
        },
        {
          key: '1-2',
          label: 'node2',
        },
      ],
    },
    {
      key: '2',
      label: 'Parent2',
      children: [
        {
          key: '2-1',
          label: 'node1',
        },
        {
          key: '2-2',
          label: 'node2',
        },
      ],
    },
    {
      key: '3',
      label: 'Parent3',
      children: [
        {
          key: '3-1',
          label: 'node1',
        },
        {
          key: '3-2',
          label: 'node2',
        },
      ],
    },
  ];
  return (
    <Tree
      style={{
        width: 200,
      }}
      treeData={treeData}
      checkable
      expandedKeys={['1']}
      checkedKeys={['1-2']}
      onChecked={(e) => {
        console.log('onChecked', e);
      }}
    />
  );
};
```


## API

```API
/packages/design/src/data-display/tree/type.tsx
```