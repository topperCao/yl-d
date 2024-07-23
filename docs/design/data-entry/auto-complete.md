## 基本使用

```jsx | react
import React, { useState } from 'react';
import { AutoComplete, Switch } from '@yl-d/design';

export default () => {
  const [value, setValue] = useState('');
  const [disabled, setDisabled] = useState('');
  const onSelect = (value) => {
    console.log(value);
    setValue(value);
  };
  return (
    <>
      <AutoComplete
        allowClear
        options={['@163.com', '@qq.com', '@aliyun.com']}
        style={{ width: 200 }}
        placeholder="请输入邮箱"
        onSelect={onSelect}
        value={value}
        disabled={disabled}
      />
      <br />
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