import { useRef, useState } from 'react';
import { Button, Form, Search, Spin } from '../..';
import { IconSettings, IconRefresh } from '@yl-d/icon';
import { transformColumns } from './util';
import { TableProps } from './type';
import Table from './table';
import './index.less';

const Contianer = ({ search, form, tableRef, lastColums, ...rest }: any) => {
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
  autoNo = false,
  ...rest
}: TableProps) => {
  if (useFilter) {
    tools.push({
      icon: <IconSettings />,
      className: 'btn-tool',
    });
  }
  if (useRefresh) {
    tools.push({
      icon: <IconRefresh />,
      type: 'primary',
      className: 'btn-tool',
      async onClick() {
        await tableRef.current.refresh();
      },
    });
  }
  // 查询表单实例
  const form = Form.useForm();
  // 解析 cloums
  const lastColums = [...transformColumns(columns)];
  // 自增序号
  if (autoNo) {
    lastColums.unshift({
      title: '序号',
      fixed: 'left',
      dataIndex: 'inner_no',
      width: 80,
      render: (a, b, index) => {
        if (rest.pagination) {
          return (
            (rest.pagination.pageNum - 1) *
              rest.pagination.pageSize +
            index +
            1
          );
        }
        return index + 1;
      },
    });
  }
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
        tools={tools}
        {...rest}
      />
    </div>
  );
};
