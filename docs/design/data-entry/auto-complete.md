## 基本使用

```jsx | react
import { useState } from 'react';
import { AutoComplete, Switch } from '@yl-d/design';

export default () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <AutoComplete
        allowClear
        options={['@163.com', '@qq.com', '@aliyun.com']}
        style={{ width: 200 }}
        placeholder="请输入邮箱"
        disabled={disabled}
        onChange={(v) => {
          console.log('onChange', v)
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
