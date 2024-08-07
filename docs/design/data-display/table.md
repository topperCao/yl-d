## 基本使用

```jsx | react
import { Table } from '@yl-d/design';

export default () => {
  return (
    <Table
      rowKey="id"
      useRefresh={false}
      useFilter={false}
      columns={[
        {
          title: 'ID',
          dataIndex: 'id',
          width: 60,
        },
        {
          title: '姓名',
          dataIndex: 'username',
        },
        {
          title: '性别',
          dataIndex: 'sex',
          enums: ['男', '女'],
        },
        {
          title: '城市',
          dataIndex: 'city',
        },
        {
          title: '签名',
          dataIndex: 'sign',
        },
        {
          title: '登录次数',
          dataIndex: 'logins',
        },
        {
          title: '分类',
          dataIndex: 'classify',
        },
        {
          title: '分数',
          dataIndex: 'score',
        },
      ]}
      request={async (params) => {
        const res = await axios.get(
          'https://api-online.yunliang.cloud/lyr-component/table',
          {
            params,
          },
        );
        return {
          success: res.data.success,
          data: res.data.list,
          total: res.data.total,
        };
      }}
    />
  );
};
```

## 自定义分页

> 配置 paginationConfig

```jsx | react
import { Table } from '@yl-d/design';

export default () => {
  return (
    <Table
      rowKey="id"
      useRefresh={false}
      useFilter={false}
      columns={[
        {
          title: 'ID',
          dataIndex: 'id',
          width: 60,
        },
        {
          title: '姓名',
          dataIndex: 'username',
        },
        {
          title: '性别',
          dataIndex: 'sex',
          enums: ['男', '女'],
        },
        {
          title: '城市',
          dataIndex: 'city',
        },
        {
          title: '签名',
          dataIndex: 'sign',
        },
        {
          title: '登录次数',
          dataIndex: 'logins',
        },
        {
          title: '分类',
          dataIndex: 'classify',
        },
        {
          title: '分数',
          dataIndex: 'score',
        },
      ]}
      paginationConfig={{
        pageSize: 10,
        showJumper: true,
        pageSizeOptions: [10, 20, 30],
        onPageSizeChange: (e) => {
          console.log(e);
        },
        onChange: (e) => {
          console.log(e);
        },
      }}
      request={async (params) => {
        const res = await axios.get(
          'https://api-online.yunliang.cloud/lyr-component/table',
          {
            params,
          },
        );
        return {
          success: res.data.success,
          data: res.data.list,
          total: res.data.total,
        };
      }}
    />
  );
};
```

## 配置操作列

> 使用 rowOperations 配置操作列信息

```jsx | react | var(--bg-color-2)
import { Table, Message } from '@yl-d/design';
import { IconPlus } from '@yl-d/icon';
import axios from 'axios';

export default () => {
  return (
    <Table
      rowKey="id"
      title="用户信息表"
      columns={[
        {
          title: 'ID',
          dataIndex: 'id',
          width: 60,
        },
        {
          title: '姓名',
          dataIndex: 'username',
          width: 120,
        },
        {
          title: '性别',
          dataIndex: 'sex',
          enums: ['男', '女'],
        },
        {
          title: '城市',
          dataIndex: 'city',
        },
        {
          title: '签名',
          dataIndex: 'sign',
          sort: true,
        },
        {
          title: '登录次数',
          dataIndex: 'logins',
        },
        {
          title: '分类',
          dataIndex: 'classify',
        },
        {
          title: '分数',
          dataIndex: 'score',
        },
      ]}
      rowOperations={{
        width: 140,
        menus: ({ record, refresh, index }) => [
          {
            label: '编辑',
            onClick() {
              console.log(record);
            },
          },
          {
            label: '查看',
            onClick() {
              console.log(record);
            },
          },
          {
            label: '删除',
            confirm: {
              content: `是否确认删除该数据（${record.username}）？`,
            },
            async onClick() {
              await new Promise((res) => setTimeout(res, 1000));
              Message.success('已删除!');
              refresh();
              console.log(record);
            },
          },
        ],
      }}
      tools={[
        {
          label: '添加',
          type: 'primary',
          icon: <IconPlus />,
          onClick({ refresh }) {
            console.log(tableRef);
          },
        },
      ]}
      request={async (params) => {
        const res = await axios.get(
          'https://api-online.yunliang.cloud/lyr-component/table',
          {
            params,
          },
        );
        return {
          success: res.data.success,
          data: res.data.list,
          total: res.data.total,
        };
      }}
    />
  );
};
```


## 固定左右列

> 只有配置了 scroll.x 属性才生效

```jsx | react | var(--bg-color-2)
import { Table, Message } from '@yl-d/design';
import { IconPlus } from '@yl-d/icon';
import axios from 'axios';

export default () => {
  return (
    <Table
      rowKey="id"
      title="用户信息表"
      columns={[
        {
          title: 'ID',
          dataIndex: 'id',
          width: 60,
          fixed: 'left',
        },
        {
          title: '姓名',
          dataIndex: 'username',
          width: 120,
          fixed: 'left',
        },
        {
          title: '性别',
          dataIndex: 'sex',
          enums: ['男', '女'],
        },
        {
          title: '城市',
          dataIndex: 'city',
        },
        {
          title: '签名',
          dataIndex: 'sign',
          sort: true,
        },
        {
          title: '登录次数',
          dataIndex: 'logins',
        },
        {
          title: '分类',
          dataIndex: 'classify',
        },
        {
          title: '分数',
          dataIndex: 'score',
        },
      ]}
      rowOperations={{
        width: 140,
        menus: ({ record, refresh, index }) => [
          {
            label: '编辑',
            onClick() {
              console.log(record);
            },
          },
          {
            label: '查看',
            onClick() {
              console.log(record);
            },
          },
          {
            label: '删除',
            confirm: {
              content: `是否确认删除该数据（${record.username}）？`,
            },
            async onClick() {
              await new Promise((res) => setTimeout(res, 1000));
              Message.success('已删除!');
              refresh();
              console.log(record);
            },
          },
        ],
      }}
      scroll={{
        x: 1200,
        y: 300,
      }}
      tools={[
        {
          label: '添加',
          type: 'primary',
          icon: <IconPlus />,
          onClick({ refresh }) {
            console.log(tableRef);
          },
        },
      ]}
      request={async (params) => {
        const res = await axios.get(
          'https://api-online.yunliang.cloud/lyr-component/table',
          {
            params,
          },
        );
        return {
          success: res.data.success,
          data: res.data.list,
          total: res.data.total,
        };
      }}
    />
  );
};
```

## 支持多选

```jsx | react
import { Table } from '@yl-d/design';

export default () => {
  return (
    <Table
      rowKey="id"
      useRefresh={false}
      useFilter={false}
      checkable
      onCheck={(e) => {
        console.log(e)
      }}
      columns={[
        {
          title: 'ID',
          dataIndex: 'id',
          width: 60,
        },
        {
          title: '姓名',
          dataIndex: 'username',
        },
        {
          title: '性别',
          dataIndex: 'sex',
          enums: ['男', '女'],
        },
        {
          title: '城市',
          dataIndex: 'city',
        },
        {
          title: '签名',
          dataIndex: 'sign',
        },
        {
          title: '登录次数',
          dataIndex: 'logins',
        },
        {
          title: '分类',
          dataIndex: 'classify',
        },
        {
          title: '分数',
          dataIndex: 'score',
        },
      ]}
      request={async (params) => {
        const res = await axios.get(
          'https://api-online.yunliang.cloud/lyr-component/table',
          {
            params,
          },
        );
        return {
          success: res.data.success,
          data: res.data.list,
          total: res.data.total,
        };
      }}
    />
  );
};
```


## 配置查询条件

```jsx | react
import { Table, Message } from '@yl-d/design';
import { IconPlus } from '@yl-d/icon';
import axios from 'axios';

export default () => {
  return (
    <Table
      rowKey="id"
      title="用户信息表"
      style={{
        padding: 20,
        background: 'var(--bg-color-2)',
      }}
      columns={[
        {
          title: 'ID',
          dataIndex: 'id',
          width: 60,
          fixed: 'left',
        },
        {
          title: '姓名',
          dataIndex: 'username',
          width: 120,
        },
        {
          title: '性别',
          dataIndex: 'sex',
          enums: ['男', '女'],
        },
        {
          title: '城市',
          dataIndex: 'city',
        },
        {
          title: '签名',
          dataIndex: 'sign',
          sort: true,
        },
        {
          title: '登录次数',
          dataIndex: 'logins',
        },
        {
          title: '分类',
          dataIndex: 'classify',
        },
        {
          title: '分数',
          dataIndex: 'score',
        },
      ]}
      rowOperations={{
        width: 140,
        menus: ({ record, refresh, index }) => [
          {
            label: '编辑',
            onClick() {
              console.log(record);
            },
          },
          {
            label: '查看',
            onClick() {
              console.log(record);
            },
          },
          {
            label: '删除',
            confirm: {
              content: `是否确认删除该数据（${record.username}）？`,
            },
            async onClick() {
              await new Promise((res) => setTimeout(res, 1000));
              Message.success('已删除!');
              refresh();
              console.log(record);
            },
          },
        ],
      }}
      scroll={{
        x: 1200,
        y: 300,
      }}
      tools={[
        {
          label: '添加',
          type: 'primary',
          icon: <IconPlus />,
          onClick({ refresh }) {
            console.log(tableRef);
          },
        },
      ]}
      search={{
        column: 3,
        schema: [
          {
            type: 'Input',
            name: 'name',
            label: '用户姓名',
          },
        ],
      }}
      request={async (params) => {
        const res = await axios.get(
          'https://api-online.yunliang.cloud/lyr-component/table',
          {
            params,
          },
        );
        return {
          success: res.data.success,
          data: res.data.list,
          total: res.data.total,
        };
      }}
    />
  );
};
```

## API

```API
/packages/design/src/data-display/table/type.tsx
```