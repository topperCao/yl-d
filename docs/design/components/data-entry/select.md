## 基本使用

```jsx | react
import React, { useState } from 'react';
import { Select, Switch } from '@yl-d/design';

const { Option } = Select;

export default () => {
  const [disabled, setdisabled] = useState(false);
  return (
    <>
      <Select
        disabled={disabled}
        placeholder="请选择"
        options={[
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
          },
        ]}
      />
      <br />
      <br />
      <Switch
        checkedChildren="启用"
        unCheckedChildren="禁用"
        checked={!disabled}
        onChange={setdisabled.bind(null, !disabled)}
      />
    </>
  );
};
```

## 选项禁用, 支持清空

```jsx | react
import React, { useState } from 'react';
import { Select } from '@yl-d/design';

export default () => {
  const options = [
    {
      label: 'Jack',
      value: 0,
    },
    {
      label: 'Tom',
      value: 1,
      disabled: true,
    },
    {
      label: 'Bob',
      value: 2,
    },
  ];
  const [value, setvalue] = useState();
  const onChange = (value, option) => {
    setvalue(value);
  };
  return (
    <>
      <Select
        placeholder="请选择"
        onChange={onChange}
        options={options}
        value={value}
      />
      &nbsp;&nbsp;&nbsp;
      <Select
        placeholder="请选择"
        allowClear
        onChange={onChange}
        options={options}
        value={value}
      />
    </>
  );
};
```

## 带搜索框-自定义规则

```jsx | react
import React, { useState } from 'react';
import { Select } from '@yl-d/design';

export default () => {
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
    },
  ];
  const onSearch = (value) => {
    console.log('onSearch', value);
  };
  const [value, setvalue] = useState();
  const onChange = (value, option) => {
    setvalue(value);
  };
  return (
    <>
      <Select
        filter
        placeholder="查询"
        onSearch={onSearch}
        onChange={onChange}
        options={options}
        value={value}
        style={{ width: 200 }}
      />
      &nbsp;&nbsp;&nbsp;
      <Select
        filter={(option, value) => {
          // 精确查询 区分大小写
          return option.label.includes(value.trim());
        }}
        placeholder="自定义-查询"
        onSearch={onSearch}
        onChange={onChange}
        options={options}
        value={value}
        style={{ width: 200 }}
      />
    </>
  );
};
```

## 下拉多选

```jsx | react
import React, { useState } from 'react';
import { Select, Checkbox } from '@yl-d/design';

export default () => {
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
    },
  ];
  const [value, setvalue] = useState(['Css', 'React']);
  const onChange = (value, option) => {
    setvalue(value);
    console.log('value is', value);
  };
  return (
    <>
      <Checkbox
        onChange={(e) => {
          setvalue(
            e.target.checked
              ? ['Html', 'Css', 'JavaScript', 'React', 'Vue']
              : [],
          );
        }}
      >
        Select All
      </Checkbox>
      <br />
      <br />
      <Select
        multiple
        style={{ width: 300 }}
        placeholder="请选择"
        onChange={onChange}
        options={options}
        value={value}
      />
    </>
  );
};
```