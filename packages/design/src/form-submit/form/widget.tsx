import FormList from './list-form';
import TableList from './list-table';
import {
  AutoComplete,
  Cascader,
  DatePicker,
  Input,
  InputNumber,
  Select,
  Slider,
  Switch,
  TimePicker,
  CheckGroup,
  RadioGroup,
  RangeDatePicker,
  RangeTimePicker,
  Rate,
  TreeSelect,
} from '../..';

const Error = ({ type }) => {
  return <span style={{ color: 'red' }}>找不到类型：{type}</span>;
};

const Block = ({ label }) => {
  return <p className="yld-form-item-block">{label}</p>;
};

const mapping = {
  AutoComplete,
  Cascader,
  DatePicker,
  Input,
  InputNumber,
  Select,
  Slider,
  Switch,
  TimePicker,
  CheckGroup,
  RadioGroup,
  RangeDatePicker,
  RangeTimePicker,
  Rate,
  TreeSelect,
  Block,
  FormList,
  TableList,
};

export const getComponent = (type: string | Function) =>
  typeof type === 'function'
    ? type
    : mapping[type] || (() => <Error type={type} />);

export default mapping;
