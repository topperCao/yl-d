import { useRef } from 'react';
import { Button, Form, Search } from '../../index';
import { TableProps } from './type';
import Table from './table';

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
  ...rest
}: TableProps) => {
  if (useFilter) {
    tools.push({
      icon: 'shezhi',
      className: 'btn-tool',
      async onClick({ refresh }) {},
    });
  }
  if (useRefresh) {
    tools.push({
      icon: 'refresh',
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
    <div className="yld-table-contianer">
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
      <Table tableRef={tableRef} columns={lastColums} {...rest} tools={tools} />
    </div>
  );
};
