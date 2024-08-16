import { useState, useEffect, useRef } from 'react';
import { Pagination, Checkbox, Empty, Button } from '../..';
import renderBody from './hooks/render-body';
import renderHead from './hooks/render-head';
import { TableProps } from './type';

export default ({
  columns = [],
  tools,
  title,
  request = async (p) => {
    return {
      success: true,
      total: 0,
      data: [],
    };
  },
  rowKey = 'id',
  style = {},
  paginationConfig = {
    pageSize: 10,
  },
  bordered = false,
  checkable = false,
  onCheck,
  tableRef,
  setLoading,
  scroll = {},
}: TableProps) => {
  const tableWrapRef = useRef<HTMLDivElement>();
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
    /** 处理滚动的监听 */
    const wrapScroll = (e) => {
      if (e.target.scrollLeft > 0) {
        tableWrapRef.current.classList.add('show-fixed-left-box-shadow');
      } else {
        tableWrapRef.current.classList.remove('show-fixed-left-box-shadow');
      }
      if (e.target.scrollLeft === e.target.scrollWidth - e.target.clientWidth) {
        tableWrapRef.current.classList.add('hidden-fixed-right-box-shadow');
      } else {
        tableWrapRef.current.classList.remove('hidden-fixed-right-box-shadow');
      }
    };
    tableWrapRef.current.addEventListener('scroll', wrapScroll);
    return () => {
      tableWrapRef.current?.removeEventListener('scroll', wrapScroll);
    };
  }, []);
  const innerTableRef: any = useRef({
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
  return (
    <>
      <div className="yld-table" style={style}>
        {tools.length > 0 && (
          <div className="yld-table-tools">
            <h3>{title}</h3>
            <div
              style={{
                display: 'flex',
                gap: 10,
              }}
            >
              {(tools as any).map((item) => {
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
        <div className="yld-table-wrap" ref={tableWrapRef}>
          <table className="yld-table-header" ref={tableHeaderRef}>
            {renderHead({
              scroll,
              columns,
              bordered,
              query,
              width: tableHeaderRef.current?.getBoundingClientRect()?.width,
            })}
          </table>
          <table
            className="yld-table-body"
            ref={tableBodyRef}
            style={{ height: scroll.y }}
          >
            {innerTableRef.current.dataSource.length === 0 ? (
              <Empty />
            ) : (
              renderBody({
                rowKey,
                columns,
                scroll,
                bordered,
                dataSource: innerTableRef.current.dataSource,
                width: tableBodyRef.current?.getBoundingClientRect()?.width,
              })
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
    </>
  );
};
