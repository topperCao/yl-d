## 基本使用

```jsx | react
import { useState } from 'react';
import { Menu, Switch } from '@yl-d/design';
import { IconFindReplace } from '@yl-d/icon';

export default () => {
  const [collapsed, setcollapsed] = useState();
  const menus = [
    {
      key: '1',
      icon: <IconFindReplace />,
      label: 'Navigation One',
      children: [
        {
          key: '1-1',
          icon: <IconFindReplace />,
          label: 'Option1',
        },
        {
          key: '1-2',
          label: 'Option2',
        },
      ],
    },
    {
      key: '2',
      icon: <IconFindReplace />,
      label: 'Navigation Two Navigation Two',
      children: [
        {
          key: '2-1',
          label: 'Option1',
          children: [
            {
              key: '2-1-1',
              label: 'Option1',
              icon: <IconFindReplace />,
              children: [
                {
                  key: '2-1-1-1',
                  label: 'Option1',
                },
              ],
            },
            {
              key: '2-1-2',
              label: 'Option2',
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      key: '3',
      icon: <IconFindReplace />,
      label: 'Navigation Three',
      children: [
        {
          key: '3-1',
          label: 'Option1',
        },
      ],
    },
    {
      key: '4',
      disabled: true,
      icon: <IconFindReplace />,
      label: 'Navigation Four',
      children: [
        {
          key: '4-1',
          label: 'Option1',
        },
      ],
    },
  ];
  return (
    <>
      <Switch
        checkedChildren="展开"
        unCheckedChildren="收起"
        onChange={setcollapsed.bind(null, !collapsed)}
      />
      <Menu
        style={{
          width: 240,
          margin: '10px 0',
          background: 'var(--bg-color-2)',
        }}
        menus={menus}
        collapsed={collapsed}
        menuClick={(openkey, selectKey) => {
          console.log(openkey, selectKey);
        }}
        openKey={['1', '2', '2-1', '2-1-1']}
        selectKey={['1-2']}
      />
    </>
  );
};
```
