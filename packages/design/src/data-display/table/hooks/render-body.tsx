/** 渲染主体表格 */
export default ({ rowKey, dataSource, columns, scroll, bordered, width }) => {
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
                  ((scroll.x || width) - defineColumnWidth) /
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
              if (scroll?.x) {
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
              }
              return (
                <td
                  title={typeof label !== 'object' ? label : ''}
                  key={column.dataIndex}
                  className={columnClassName.join(' ')}
                  style={tdStyle}
                >
                  <span className="yld-table-td-label" title={label}>
                    {label}
                  </span>
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
