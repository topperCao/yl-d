## 基本使用

```jsx | react
import { Carousel, Icon } from '@yl-d/design';

export default () => {
  const style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <Carousel
      showArrow
      style={{ width: '100%', height: 340 }}
      pages={[
        <div style={style}>
          <Icon type="password-visible" size={50} />
          page1
        </div>,
        <div style={style}>
          <Icon type="weimingmingwenjianjia_rili" size={50} />
          page2
        </div>,
        <div style={style}>
          <Icon type="empty" size={50} />
          page3
        </div>,
        <div style={style}>
          <Icon type="password-invisible" size={50} />
          page4
        </div>,
      ]}
    />
  );
};
```

## 自动播放-渐变模式

```jsx | react
import { Carousel, Icon } from '@yl-d/design';

export default () => {
  const style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <Carousel
      showArrow
      autoPlay
      effect="fade"
      style={{ width: '100%', height: 340 }}
      pages={[
        <div style={style}>
          <Icon type="password-visible" size={50} />
          page1
        </div>,
        <div style={style}>
          <Icon type="weimingmingwenjianjia_rili" size={50} />
          page2
        </div>,
        <div style={style}>
          <Icon type="empty" size={50} />
          page3
        </div>,
        <div style={style}>
          <Icon type="password-invisible" size={50} />
          page4
        </div>,
      ]}
    />
  );
};
```
