```jsx | pureReact
export default () => {
  return (
    <>
      <p
        className="package-version"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          position: 'relative',
          top: 3,
        }}
      >
        <a href={`https://www.npmjs.com/package/@yl-d/design`} target="_blank">
          <img alt="npm" src={`https://img.shields.io/npm/dt/@yl-d/design`} />
        </a>
        <a href={`https://www.npmjs.com/package/@yl-d/design`} target="_blank">
          <img
            alt="NPM downloads"
            src={`https://img.shields.io/npm/v/@yl-d/design.svg`}
          />
        </a>
      </p>
    </>
  );
};
```

## 安装

```js
yarn add @yl-d/design
```

## 说明

- 仅个人学习
- 个人日常的开发需求
- 样式风格上借鉴 [arco-design](https://arco.design/react/components/button)

```jsx | react
import Tree from "@yl-d/design";
import TreeSelect from "@/design/tree-select.tsx";

export default () => {
  const treeData = [
    {
      key: 'node1',
      title: 'Trunk',
      children: [
        {
          key: 'node2',
          title: 'Leaf1',
        },
      ],
    },
    {
      key: 'node3',
      title: 'Trunk2',
      children: [
        {
          key: 'node4',
          title: 'Leaf2',
        },
        {
          key: 'node5',
          title: 'Leaf3',
        },
      ],
    },
  ];
  return (
    <TreeSelect
      checkable
      value={['node1', 'node2']}
      expandedKeys={['node1']}
      treeData={treeData}
      style={{ width: 200 }}
      onChange={(value) => {
        console.log('onChange', value);
      }}
    />
  );
};

```