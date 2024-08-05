import { useRef, useState } from 'react';
import { Button, Form, Search, Spin } from '../..';
import { IconSettings, IconRefresh } from '@yl-d/icon';
import { TableProps } from './type';
import Table from './table';
import './index.less';

const Contianer = ({ search, form, tableRef, lastColums, tools, ...rest }: any) => {
  const [loading, setLoading] = useState(false); // 控制loading
  return (
    <Spin loading={loading}>
      {search.schema.length > 0 && (
        <Search
          {...search}
          onReset={async () => {
            form.clearValues({});
            await tableRef.current.search(form.getValues());
          }}
          onSearch={async () => {
            await tableRef.current.search(form.getValues());
          }}
        />
      )}
      <Table
        tableRef={tableRef}
        setLoading={setLoading}
        columns={lastColums}
        {...rest}
        tools={tools}
      />
    </Spin>
  );
};

export default ({
  tableRef = useRef({}),
  columns = [],
  search = {
    schema: [],
    column: 3,
  },
  tools = [],
  rowOperations,
  useRefresh = true,
  useFilter = true,
  style = {},
  ...rest
}: TableProps) => {
  if (useFilter) {
    tools.push({
      icon: <IconSettings />,
      className: 'btn-tool',
      async onClick({ refresh }) {},
    });
  }
  if (useRefresh) {
    tools.push({
      icon: <IconRefresh />,
      type: 'primary',
      className: 'btn-tool',
      async onClick({ refresh }) {
        await refresh();
      },
    });
  }
  // 查询表单实例
  const form = Form.useForm();
  // 解析 cloums
  const lastColums = [...columns];
  if (rowOperations) {
    const { width, menus } = rowOperations;
    lastColums.push({
      title: '操作',
      width,
      dataIndex: 'yld-table-row-operation',
      fixed: 'right',
      render(e, record, index) {
        return (
          <div className="yld-table-row-operation">
            {menus({
              record,
              refresh: tableRef.current.refresh,
              index,
            }).map((item) => {
              return (
                <Button key={item.label} {...item} type={item.type || 'link'}>
                  {item.label}
                </Button>
              );
            })}
          </div>
        );
      },
    });
  }
  return (
    <div className="yld-table-contianer" style={style}>
      <Contianer
        tableRef={tableRef}
        form={form}
        columns={lastColums}
        search={search}
        {...rest}
        tools={tools}
      />
    </div>
  );
};
