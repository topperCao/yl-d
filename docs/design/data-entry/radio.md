## 基本使用

```jsx | react
import { useState } from 'react';
import { Radio } from '@yl-d/design';

export default () => {
  const [checked, setCheck] = useState(false);
  return (
    <Radio
      checked={checked}
      onChange={(e) => {
        setCheck(e.target.checked);
      }}
    >
      单一选择
    </Radio>
  );
};
```

## 多个选项

```jsx | react
import { useState } from 'react';
import { RadioGroup } from '@yl-d/design';

export default () => {
  const [value, setValue] = useState('React');
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
  return (
    <RadioGroup
      options={options}
      value={value}
      onChange={(value) => {
        setValue(value);
      }}
    />
  );
};
```