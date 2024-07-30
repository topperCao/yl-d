import { useState, useEffect, useRef } from 'react';
import { Icon, Pagination, Checkbox, Empty, Spin, Button } from '../../index';
import { TableProps } from './type';

export default ({
  columns = [],
  tools,
  title,
  request = async (params) => {
    return {
      success: true,
      total: 0,
      data: [],
    };
  },
  rowKey = 'id',
  style = {},
  paginationConfig = false,
  bordered = false,
  checkable = false,
  onCheck,
  tableRef,
  scroll = {},
}: TableProps) => {
  // 刷新逻辑
  const [loading, setLoading] = useState(false); // 控制loading
  const tableHeaderRef = useRef<HTMLTableElement>();
  const tableBodyRef = useRef<HTMLTableElement>();
  useEffect(() => {
    if (scroll.x) {
      tableBodyRef.current.style.width = scroll.x + 'px';
      tableHeaderRef.current.style.width = scroll.x + 'px';
    }
    if (scroll.y) {
      tableBodyRef.current.style.maxHeight = scroll.y + 'px';
    }
  }, []);
  const innerTableRef: any = useRef({
    loading: false,
    dataSource: [],
    pagination:
      typeof paginationConfig === 'object'
        ? {
            pageSize: paginationConfig.pageSize,
            pageNum: paginationConfig.pageNum,
          }
        : {},
    params: {},
  });
  const query = async (sort: any = {}) => {
    setLoading(true);
    try {
      const { success, data, total } = await request({
        ...innerTableRef.current.params,
        ...innerTableRef.current.pagination,
        ...sort,
      });
      if (success) {
        innerTableRef.current.dataSource = data;
        innerTableRef.current.pagination.total = total;
      }
    } catch (error) {
      console.log('request error: ', error);
    } finally {
      setLoading(false);
    }
  };
  // 挂载api
  useEffect(() => {
    tableRef.current.refresh = async (params = {}) => {
      await query(params);
    };
    tableRef.current.search = async (params = {}) => {
      innerTableRef.current.pagination.pageNum = 1; // 回到第一页
      await query(params);
    };
    tableRef.current.dataSource = innerTableRef.current.dataSource;
    tableRef.current.pagination = innerTableRef.current.pagination;
    tableRef.current.params = innerTableRef.current.params;
  }, [
    innerTableRef.current.dataSource,
    innerTableRef.current.pagination,
    innerTableRef.current.params,
  ]);
  // 请求数据
  useEffect(() => {
    query();
  }, []);
  const [checkedkeys, setCheckedkeys] = useState([]); // 内置选择器
  /** 全选当前数据 */
  const checkedAll = (checked) => {
    let checkedkeys = [];
    if (checked) {
      checkedkeys = innerTableRef.current.dataSource.map(
        (item) => item[rowKey || 'key'],
      );
    }
    setCheckedkeys(checkedkeys);
    typeof onCheck === 'function' && onCheck(checkedkeys);
  };
  // 判断是否已经全选
  const isCheckedAll = () => {
    return (
      checkedkeys.length > 0 &&
      innerTableRef.current.dataSource.every((item) => {
        return checkedkeys.some((key) => key === item[rowKey || 'key']);
      })
    );
  };
  /**
   * 内部多选
   */
  if (checkable) {
    let column: any = {
      title: (
        <Checkbox
          checked={isCheckedAll()}
          onChange={(e) => {
            checkedAll(e.target.checked);
          }}
        />
      ),
      width: 40,
      fixed: 'left',
      dataIndex: 'yld-checked-930226',
      render: (e, record) => {
        return (
          <Checkbox
            checked={checkedkeys.includes(record[rowKey || 'key'])}
            onChange={() => {
              let index = checkedkeys.indexOf(record[rowKey || 'key']);
              if (index > -1) {
                checkedkeys.splice(index, 1);
              } else {
                checkedkeys.push(record[rowKey || 'key']);
              }
              setCheckedkeys([...checkedkeys]);
              typeof onCheck === 'function' && onCheck(checkedkeys);
            }}
          />
        );
      },
    };
    if (columns[0] && columns[0].dataIndex !== 'yld-checked-930226') {
      // 没有添加1项
      columns.unshift(column);
    } else {
      columns[0] = column;
    }
  }
  /** 渲染表头 */
  const renderHeaderTable = (columns) => {
    const defineColumn = columns.filter((i) => i.width);
    const defineColumnWidth = defineColumn.reduce(
      (a, b) => ({ width: a.width + b.width }),
      { width: 0 },
    )?.width;
    const defineFixedLeft = columns.filter((i) => i.fixed === 'left');
    const defineFixedRight = columns.filter((i) => i.fixed === 'right');
    return (
      <thead>
        <tr className="yld-table-header-tr">
          {columns.map((column, _index) => {
            const tdStyle: any = {
              width:
                column.width ||
                (scroll.x - defineColumnWidth) /
                  (columns.length - defineColumn.length),
            };
            let columnClassName = ['yld-table-td'];
            if (column.sort) {
              columnClassName.push('yld-table-td-sort');
            }
            if (bordered) {
              columnClassName.push('yld-table-td-grid');
            }
            if (column.fixed === 'left') {
              columnClassName.push(`yld-table-td-fixed-left`);
              tdStyle.left = defineFixedLeft
                .slice(0, _index)
                .reduce((a, b) => ({ width: a.width + b.width }), {
                  width: 0,
                }).width;
            }
            if (column.fixed === 'right') {
              columnClassName.push(`yld-table-td-fixed-right`);
              tdStyle.right = defineFixedRight
                .slice(defineFixedRight.length - (columns.length - _index) + 1)
                .reduce((a, b) => ({ width: a.width + b.width }), {
                  width: 0,
                }).width;
            }
            if (_index === defineFixedLeft.length - 1) {
              columnClassName.push('yld-table-td-fixed-left-last');
            }
            if (columns.length - _index === defineFixedRight.length) {
              columnClassName.push('yld-table-td-fixed-right-frist');
            }
            return (
              <td
                className={columnClassName.join(' ')}
                key={column.dataIndex}
                style={tdStyle}
              >
                {column.title}
                {column.sort && (
                  <>
                    <Icon
                      type="xiala1"
                      size={12}
                      style={{ left: 4, top: -6 }}
                      onClick={() => {
                        query({
                          type: 'asc',
                          dataIndex: column.dataIndex,
                        });
                      }}
                    />
                    <Icon
                      type="xialadown"
                      size={12}
                      style={{ top: 6, right: 8 }}
                      onClick={() => {
                        query({
                          type: 'desc',
                          dataIndex: column.dataIndex,
                        });
                      }}
                    />
                  </>
                )}
              </td>
            );
          })}
        </tr>
      </thead>
    );
  };
  /** 渲染主体表格 */
  const renderBodyTable = (dataSource, columns) => {
    const defineColumn = columns.filter((i) => i.width);
    const defineColumnWidth = defineColumn.reduce(
      (a, b) => ({ width: a.width + b.width }),
      { width: 0 },
    )?.width;
    const defineFixedLeft = columns.filter((i) => i.fixed === 'left');
    const defineFixedRight = columns.filter((i) => i.fixed === 'right');
    return (
      <tbody>
        {dataSource.map((data, index) => {
          return (
            <tr key={data[rowKey]} className="yld-table-body-tr">
              {columns.map((column, _index) => {
                const tdStyle: any = {
                  width:
                    column.width ||
                    (scroll.x - defineColumnWidth) /
                      (columns.length - defineColumn.length),
                };
                let label = column.render
                  ? column.render(data[column.dataIndex], data, index)
                  : data[column.dataIndex];
                let columnClassName = ['yld-table-td'];
                if (column.ellipsis) {
                  columnClassName.push('yld-table-td-ellipsis');
                }
                if (bordered) {
                  columnClassName.push('yld-table-td-grid');
                }
                if (column.fixed === 'left') {
                  columnClassName.push(`yld-table-td-fixed-left`);
                  tdStyle.left = defineFixedLeft
                    .slice(0, _index)
                    .reduce((a, b) => ({ width: a.width + b.width }), {
                      width: 0,
                    }).width;
                }
                if (column.fixed === 'right') {
                  columnClassName.push(`yld-table-td-fixed-right`);
                  tdStyle.right = defineFixedRight
                    .slice(
                      defineFixedRight.length - (columns.length - _index) + 1,
                    )
                    .reduce((a, b) => ({ width: a.width + b.width }), {
                      width: 0,
                    }).width;
                }
                if (_index === defineFixedLeft.length - 1) {
                  columnClassName.push('yld-table-td-fixed-left-last');
                }
                if (columns.length - _index === defineFixedRight.length) {
                  columnClassName.push('yld-table-td-fixed-right-frist');
                }
                return (
                  <td
                    title={typeof label !== 'object' ? label : ''}
                    key={column.dataIndex}
                    className={columnClassName.join(' ')}
                    style={tdStyle}
                  >
                    {label}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );
  };
  return (
    <Spin loading={loading}>
      <div className="yld-table" style={style}>
        {tools.length > 0 && (
          <div className="yld-table-tools">
            <h3
              style={{
                fontSize: 12,
                borderLeft: '3px solid var(--primary-color)',
                paddingLeft: 8,
              }}
            >
              {title}
            </h3>
            <div
              style={{
                display: 'flex',
                gap: 10,
              }}
            >
              {tools.map((item) => {
                return (
                  <Button
                    key={item.label}
                    {...item}
                    type={item.type}
                    onClick={async () => {
                      await item.onClick?.({
                        refresh: tableRef.current.refresh,
                      });
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
        <div className="yld-table-wrap">
          <table className="yld-table-header" ref={tableHeaderRef}>
            {renderHeaderTable(columns)}
          </table>
          <table className="yld-table-body" ref={tableBodyRef}>
            {innerTableRef.current.dataSource.length === 0 ? (
              <Empty />
            ) : (
              renderBodyTable(innerTableRef.current.dataSource, columns)
            )}
          </table>
        </div>
      </div>
      {paginationConfig !== false && (
        <div className="yld-table-footer">
          <Pagination
            {...paginationConfig}
            current={innerTableRef.current.pagination.pageNum}
            pageSize={innerTableRef.current.pagination.pageSize}
            total={innerTableRef.current.pagination.total}
            onChange={(pageNum) => {
              innerTableRef.current.pagination.pageNum = pageNum;
              paginationConfig.onChange?.(pageNum);
              tableRef.current.refresh();
            }}
            onPageSizeChange={(pageSize) => {
              innerTableRef.current.pagination.pageSize = pageSize;
              paginationConfig.onPageSizeChange?.(pageSize);
              tableRef.current.search();
            }}
          />
        </div>
      )}
    </Spin>
  );
};
