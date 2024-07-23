# 基本使用

```jsx | react
import { useState } from 'react';
import { Checkbox } from '@yl-d/design';

export default () => {
  const [checked, setCheck] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={(e) => {
        setCheck(e.target.checked);
      }}
    >
      单一选择
    </Checkbox>
  );
};
```

## 选项组

```jsx | react
import { useState } from 'react';
import { CheckGroup } from '@yl-d/design';

export default () => {
  const [value, setValue] = useState(['React']);
  const options = [
    {
      label: 'Html',
      value: 'Html',
    },
    {
      label: 'Css',
      value: 'Css',
    },
    {
      label: 'JavaScript',
      value: 'JavaScript',
    },
    {
      label: 'React',
      value: 'React',
    },
    {
      label: 'Vue',
      value: 'Vue',
      disabled: true,
    },
  ];
  console.log('checkbox value is: ', value);
  return (
    <CheckGroup
      options={options}
      value={value}
      onChange={(value) => {
        setValue(value);
      }}
    />
  );
};
```