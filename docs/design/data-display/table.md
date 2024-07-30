## 基本使用

> 在 column 中指定 fixed: "left" 或 fixed: "right"，可将列固定到左侧或右侧，设置 fixed 的列，也需要设置 width。
注意： 要配合 scroll={{ x: number }} 使用，columns 中需要有一列不设置宽度，自适应，不然会有样式问题。

```jsx | react | var(--bg-color-2)
import { Table } from '@yl-d/design';
import axios from 'axios';

export default () => {
  const tableRef = React.useRef({});
  return (
    <Table
      rowKey="id"
      tableRef={tableRef}
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
        width: 160,
        menus: ({ record, refresh }) => [
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
            onClick() {
              console.log(record);
            },
          },
        ],
      }}
      scroll={{
        x: 1200,
        y: 300,
      }}
      checkable
      tools={[
        {
          label: '添加',
          type: "primary",
          icon: 'plus',
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
          {
            type: 'Select',
            name: 'sex',
            label: '用户性别',
            props: {
              options: [
                {
                  label: '男',
                  value: 1,
                },
                {
                  label: '女',
                  value: 2,
                },
              ],
            },
          },
        ],
      }}
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
      onCheck={(e) => {
        console.log(e);
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
