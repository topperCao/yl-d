> 基于 `DragWrapper` 扩展的拖拽表单，可基于此设计表单设计器

## 单层布局

```tsx | react
import { DragForm } from '@yl-d/design';
import items from '@/design/schema4.tsx';

export default () => {
  const [schema, setSchema] = React.useState(items);
  const [selectedKey, setSelectedKey] = React.useState();
  return (
    <DragForm
      title="单层布局"
      column={2}
      items={schema}
      onChange={(newSchema) => {
        setSchema(newSchema);
        console.log('onChange', newSchema);
      }}
      selectedKey={selectedKey}
      onSelected={(itemKey) => {
        setSelectedKey(itemKey);
        console.log('onSelected', itemKey);
      }}
    />
  );
};
```

## 嵌套布局

```tsx | react
import { DragForm } from '@yl-d/design';
import items from '@/design/schema5.tsx';

export default () => {
  const [schema, setSchema] = React.useState(items);
  const [selectedKey, setSelectedKey] = React.useState();
  return (
    <DragForm
      title="嵌套布局"
      items={schema}
      onChange={(newSchema) => {
        setSchema(newSchema);
        console.log('onChange', newSchema);
      }}
      selectedKey={selectedKey}
      onSelected={(itemKey) => {
        setSelectedKey(itemKey);
        console.log('onSelected', itemKey);
      }}
    />
  );
};
```

## API

```API
/packages/design/src/drag/form/type.tsx
```
