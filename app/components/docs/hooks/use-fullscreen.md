# useFullscreen

## 管理 DOM 全屏的 Hook

```tsx | react
import { useRef } from 'react';
import { Button, useFullscreen } from '@yl-d/components';
import { Space } from "@arco-design/web-react";

export default () => {
  const ref = useRef(null);
  const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] =
    useFullscreen(ref);
  return (
    <div ref={ref}>
      <div style={{ marginBottom: 16 }}>
        {isFullscreen ? 'Fullscreen' : 'Not fullscreen'}
      </div>
      <Space>
        <Button onClick={enterFullscreen}>enterFullscreen</Button>
        <Button onClick={exitFullscreen}>exitFullscreen</Button>
        <Button onClick={toggleFullscreen}>toggleFullscreen</Button>
      </Space>
    </div>
  );
};
```
