import { Icon } from '../../index';

export default ({ label = '暂无数据', icon = 'empty' }) => {
  return (
    <div className="yld-empty-wrapper">
      <Icon type={icon} size={50} />
      <span className="yld-empty-wrapper-label">{label}</span>
    </div>
  );
};
