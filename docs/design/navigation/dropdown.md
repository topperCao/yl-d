## Dropdown 下拉菜单

```jsx | react
import { Menu, Button, Space, Dropdown } from '@yl-d/design';
import { IconDown } from '@yl-d/icon';

export default () => {
  return (
    <Space className="dropdown-demo">
      <Dropdown
        droplist={
          <Menu
            style={{ width: 200 }}
            menus={[
              {
                key: 'Beijing',
                label: 'Beijing',
              },
              {
                key: 'Shanghai',
                label: 'Shanghai',
              },
              {
                key: 'Guangzhou',
                label: 'Guangzhou',
              },
            ]}
          />
        }
      >
        <Button type="link">
          Hover me <IconDown />
        </Button>
      </Dropdown>
    </Space>
  );
};
```
