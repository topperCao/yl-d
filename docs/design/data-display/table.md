## 基本使用

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
          width: 80,
        },
        {
          title: '姓名',
          dataIndex: 'username',
          width: 125,
        },
        {
          title: '性别',
          dataIndex: 'sex',
          width: 125,
          enums: ['男', '女'],
        },
        {
          title: '城市',
          dataIndex: 'city',
          width: 125,
        },
        {
          title: '签名',
          dataIndex: 'sign',
          width: 125,
          sort: true,
        },
        {
          title: '登录次数',
          dataIndex: 'logins',
          width: 125,
        },
        {
          title: '分类',
          dataIndex: 'classify',
          width: 125,
        },
        {
          title: '分数',
          dataIndex: 'score',
          width: 125,
        },
      ]}
      style={{ height: 360 }}
      bordered
      checkable
      tools={[
        {
          label: '导出',
          type: 'primary',
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
      rowOperations={({ record, refresh }) => {
        return [
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
        ];
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
