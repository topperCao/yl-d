## 基本使用

```jsx | react
import { useState } from 'react';
import { Menu, Switch } from '@yl-d/design';
import { IconUserGroup, IconLanguage, IconCodepen } from '@yl-d/icon';

export default () => {
  const [collapsed, setcollapsed] = useState();
  const menus = [
    {
      key: '1',
      icon: <IconUserGroup />,
      label: 'Navigation One',
      children: [
        {
          key: '1-1',
          label: 'Option1',
        },
        {
          key: '1-2',
          label: 'Option2',
        },
      ],
    },
    {
      key: '3',
      icon: <IconLanguage />,
      label: 'Navigation Three',
      children: [
        {
          key: '3-1',
          label: 'Option1',
          icon: <IconLanguage />,
          children: [
            {
              key: '3-1-1',
              label: 'Option1-1',
            },
            {
              key: '3-1-2',
              label: 'Option1-2',
            },
          ],
        },
      ],
    },
    {
      key: '4',
      icon: <IconCodepen />,
      label: 'Navigation Four',
    },
  ];
  return (
    <>
      <Switch
        checkedChildren="展开"
        unCheckedChildren="收起"
        onChange={setcollapsed.bind(null, !collapsed)}
      />
      <br />
      <br />
      <Menu
        style={{
          width: 240,
        }}
        menus={menus}
        collapsed={collapsed}
        menuClick={(openkey, selectKey) => {
          console.log(openkey, selectKey);
        }}
        openKey={['1']}
        selectKey="1-2"
      />
    </>
  );
};
```
