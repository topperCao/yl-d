import { useState, useEffect, CSSProperties, ReactNode, useRef } from 'react';
import { Select, Button, Input, Icon, Layer } from '../../index';
import DateUtil from './util';

export interface DatePickerProps {
  /** 值 */
  value?: string;
  /** 改变的钩子 */
  onChange?: Function;
  /** 提示文案 */
  placeholder?: string;
  /** 前缀 */
  addonBefore?: ReactNode;
  /** 后缀 */
  addonAfter?: ReactNode;
  /** 样式 */
  style?: CSSProperties;
  /** 是否清空 */
  allowClear?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 禁用时间段 */
  disabledDate?: Function;
  /** 下拉菜单的类名 */
  layerClassName?: string;
  /** 挂载的容器 */
  getPopupContainer?: () => HTMLElement;
}

export default ({
  onChange,
  placeholder,
  addonBefore,
  addonAfter,
  style,
  allowClear = true,
  disabled = false,
  layerClassName,
  getPopupContainer,
  ...rest
}: DatePickerProps) => {
  const dateUtil = useRef(
    new DateUtil(new Date(rest.value || new Date().getTime()), 'YYYY-MM-DD'),
  ).current;
  let yearList = dateUtil.getYearList(); // 获取年列表
  let monthList = dateUtil.getMonthList(); // 获取月列表
  const [value, setValue] = useState(rest.value);
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(dateUtil.date.getFullYear());
  const [month, setMonth] = useState(dateUtil.date.getMonth() + 1);
  const [days, setDays] = useState(rest.value);
  const [calendar, setCalendar] = useState(dateUtil.getCalendar());
  useEffect(() => {
    let date = rest.value || new Date().getTime();
    setValue(rest.value); // update
    updateDateCalendar(date); // 更新时间
  }, [rest.value, open]);
  const renderHeader = () => {
    return ['日', '一', '二', '三', '四', '五', '六'].map((item) => {
      return (
        <div className="yld-picker-header-item" key={item}>
          {item}
        </div>
      );
    });
  };
  const renderContent = () => {
    return calendar.map((row: any, index) => {
      return (
        <div className="yld-picker-calendar-row" key={index}>
          {row.map((col) => {
            return (
              <div
                key={col.dateString}
                className={
                  col.dateString === days
                    ? 'yld-picker-calendar-row-col-active'
                    : col.current
                    ? 'yld-picker-calendar-row-col-current'
                    : col.currentMonth
                    ? 'yld-picker-calendar-row-col-current-month'
                    : 'yld-picker-calendar-row-col'
                }
                onClick={setDays.bind(null, col.dateString)}
              >
                <div className="yld-picker-calendar-inner">{col.date}</div>
              </div>
            );
          })}
        </div>
      );
    });
  };
  const updateDateCalendar = (date) => {
    // 更新时间
    let month: any = dateUtil.date.getMonth() + 1;
    month = month > 9 ? month : '0' + month; // safari 不兼容不标准的字符转日期
    dateUtil.setDate(new Date(date));
    setCalendar(dateUtil.getCalendar());
    setYear(dateUtil.date.getFullYear());
    setMonth(dateUtil.date.getMonth() + 1);
  };
  const selectionRef = useRef<HTMLDivElement>();
  const layerRef = useRef<{ render: Function }>();
  return (
    <>
      <div className="yld-date-picker" style={style}>
        <div className="yld-date-picker-input" ref={selectionRef}>
          <Input
            suffix={<Icon type="weimingmingwenjianjia_rili" />}
            showCount={false}
            addonBefore={addonBefore}
            disabled={disabled}
            addonAfter={addonAfter}
            placeholder={placeholder}
            value={value}
            readOnly
            onClick={(e: any) => {
              if (open) {
                e.stopPropagation();
              }
            }}
            allowClear={allowClear}
            onAllowClear={() => {
              setValue(undefined);
              updateDateCalendar(new Date()); // 更新时间
              typeof onChange === 'function' && onChange(undefined);
            }}
            onFocus={setOpen.bind(null, true)}
          />
        </div>
        <Layer
          ref={layerRef}
          open={open}
          layerClose={() => setOpen(false)}
          layerClassName={layerClassName}
          getPopupContainer={getPopupContainer}
          domRef={selectionRef}
          layerWidth="fix-content"
          content={
            <div className="yld-date-picker-body">
              <div className="yld-date-picker-body-value">
                {days || '请选择日期'}
              </div>
              <div className="yld-date-picker-body-tools">
                <div
                  title="上一年"
                  className="picker-tools-before"
                  onClick={() => {
                    updateDateCalendar(
                      dateUtil.date.getTime() -
                        (dateUtil.isLeapYear() ? 366 : 355) *
                          24 *
                          60 *
                          60 *
                          1000,
                    );
                  }}
                >
                  <Icon type="icon-jiantouzuo" />
                </div>
                <div
                  title="上个月"
                  className="picker-tools-before picker-tools-before-month"
                  onClick={() => {
                    updateDateCalendar(
                      dateUtil.date.getTime() -
                        dateUtil.getDateNumberByMonth(
                          dateUtil.date.getMonth() + 1,
                        ) *
                          24 *
                          60 *
                          60 *
                          1000,
                    );
                  }}
                >
                  <Icon type="xiangzuoshouqi" />
                </div>
                <div className="picker-tools-date">
                  <Select
                    style={{ border: 0 }}
                    value={year}
                    options={yearList}
                    onChange={(e) => {
                      updateDateCalendar(
                        `${e}-${month}-${dateUtil.date.getDate()}`,
                      );
                    }}
                  />
                  <Select
                    style={{ border: 0, width: 80 }}
                    value={month}
                    options={monthList}
                    onChange={(e) => {
                      updateDateCalendar(
                        `${year}-${e}-${dateUtil.date.getDate()}`,
                      );
                    }}
                  />
                </div>
                <div
                  title="下个月"
                  className="picker-tools-next picker-tools-next-month"
                  onClick={() => {
                    updateDateCalendar(
                      dateUtil.date.getTime() +
                        dateUtil.getDateNumberByMonth(
                          dateUtil.date.getMonth() + 1,
                        ) *
                          24 *
                          60 *
                          60 *
                          1000,
                    );
                  }}
                >
                  <Icon type="zuocedakai" />
                </div>
                <div
                  title="下一年"
                  className="picker-tools-next"
                  onClick={() => {
                    updateDateCalendar(
                      dateUtil.date.getTime() +
                        (dateUtil.isLeapYear() ? 366 : 355) *
                          24 *
                          60 *
                          60 *
                          1000,
                    );
                  }}
                >
                  <Icon type="jiantou2" />
                </div>
              </div>
              <div className="yld-date-picker-body-header">
                {renderHeader()}
              </div>
              <div className="yld-date-picker-body-calendar">
                {renderContent()}
              </div>
              <div className="yld-date-picker-body-footer">
                <Button
                  type="primary"
                  style={{ height: 30, width: 60 }}
                  onClick={() => {
                    setOpen(false);
                    setValue(days);
                    typeof onChange === 'function' && onChange(days);
                  }}
                >
                  确定
                </Button>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
};
