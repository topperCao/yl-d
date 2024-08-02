## 基本使用

```jsx | react
import { useState } from 'react';
import { Menu, Switch } from '@yl-d/design';
import {
  IconUnorderedList,
  IconUserGroup,
  IconLanguage,
  IconIdcard,
  IconCodepen,
} from '@yl-d/icon';

export default () => {
  const [collapsed, setcollapsed] = useState();
  const menus = [
    {
      key: '1',
      icon: <IconUnorderedList />,
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
      icon: <IconIdcard />,
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
        openKey={['1']}
        selectKey='1-2'
      />
    </>
  );
};
```
