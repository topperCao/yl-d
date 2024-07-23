## 基本使用

```jsx | react
import { Icon, CopyToClipboard } from '@yl-d/design';
import icons from '@/design/other/icons.ts';

export default () => {
  return (
    <div style={{ display: 'flex', gap: '20px 40px', flexWrap: 'wrap' }}>
      {icons.map((item) => {
        return (
          <CopyToClipboard message text={`<Icon type='${item.font_class}' />`}>
            <Icon type={item.font_class} />
          </CopyToClipboard>
        );
      })}
    </div>
  );
};
```

## 设置颜色

```jsx | react
import { Icon, CopyToClipboard } from '@yl-d/design';
import icons from '@/design/other/icons.ts';

export default () => {
  return (
    <div style={{ display: 'flex', gap: '20px 40px', flexWrap: 'wrap' }}>
      {icons.map((item) => {
        return (
          <CopyToClipboard message text={`<Icon type='${item.font_class}' />`}>
            <Icon type={item.font_class} color="#1890ff" />
          </CopyToClipboard>
        );
      })}
    </div>
  );
};
```

## 设置大小和主题色

```jsx | react
import { Icon, CopyToClipboard } from '@yl-d/design';
import icons from '@/design/other/icons.ts';

export default () => {
  return (
    <div style={{ display: 'flex', gap: '20px 40px', flexWrap: 'wrap' }}>
      {icons.map((item) => {
        return (
          <CopyToClipboard message text={`<Icon type='${item.font_class}' />`}>
            <Icon type={item.font_class} size={20} primary />
          </CopyToClipboard>
        );
      })}
    </div>
  );
};
```
