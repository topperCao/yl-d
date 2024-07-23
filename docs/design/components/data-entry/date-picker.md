---
order: 8
---

## 基本使用

```jsx | react
import React, { useState } from 'react';
import { RangeDatePicker, DatePicker, Button, Switch } from '@yl-d/design';

export default () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <DatePicker
        style={{ width: 200 }}
        value="2023-07-28"
        placeholder="选择日期"
        disabled={disabled}
        onChange={(e) => {
          console.log('value is', e);
        }}
      />
      <br />
      <RangeDatePicker
        style={{ width: 424 }}
        value={['2023-07-28', '2023-08-28']}
        placeholder="选择日期"
        disabled={disabled}
        onChange={(e) => {
          console.log('value is', e);
        }}
      />
      <br />
      <Switch
        checkedChildren="启用"
        unCheckedChildren="禁用"
        checked={!disabled}
        onChange={setDisabled.bind(null, !disabled)}
      />
    </>
  );
};
```
