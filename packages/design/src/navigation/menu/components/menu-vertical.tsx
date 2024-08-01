import { useState, useEffect } from 'react';
import { MenuProps } from '..';
import { Tooltip } from '../../..';
import './menu-vertical.less';

const MenuVerical = ({
  menus,
  menuClick,
  openKey,
  selectKey,
  style,
  collapsed,
  collapsedWidth = 80,
}: MenuProps) => {
  const [_openKey, setopenKey] = useState(openKey || []);
  const [_selectKey, setselectKey] = useState(selectKey || []);
  useEffect(() => {
    /**update */
    setselectKey(selectKey);
  }, [selectKey]);
  useEffect(() => {
    /**update */
    setopenKey(openKey);
  }, [openKey]);
  const isSelected = (menus) => {
    // 判断是否有子节点选中
    return menus.some((item) => {
      if (_selectKey.includes(item.key)) {
        return true;
      } else if (item.children) {
        return isSelected(item.children);
      }
    });
  };
  const renderNav = (item, labelClassName, paddingLeft) => {
    return (
      <>
        <div className={labelClassName.join(' ')} style={{ paddingLeft }}>
          <span
            className="yld-menu-vertical-subMenu-label-left"
            title={item.label}
          >
            {item.icon}
            <span>{item.label}</span>
          </span>
        </div>
        {Array.isArray(item.children) && (
          <div
            className={
              !_openKey.includes(item.key)
                ? 'yld-menu-vertical-subMenu-hidden'
                : ''
            }
          >
            {renderMenus(item.children, paddingLeft + 24)}
          </div>
        )}
      </>
    );
  };
  const renderCollapsedNav = (item, labelClassName) => {
    return (
      <div className={labelClassName.join(' ')}>
        <Tooltip placement="right" title={item.label}>
          {item.icon}
        </Tooltip>
      </div>
    );
  };
  const onClick = (item) => {
    if (item.disabled) return;
    let selectKey = _selectKey;
    if (item.children) {
      if (_openKey.includes(item.key)) {
        _openKey.splice(
          _openKey.findIndex((key) => key === item.key),
          1,
        ); // 删除
      } else {
        _openKey.push(item.key);
      }
      setopenKey([..._openKey]);
    } else {
      selectKey = [item.key];
      setselectKey(selectKey);
    }
    typeof menuClick === 'function' && menuClick(_openKey, selectKey);
  };
  const renderMenus = (menus, paddingLeft) => {
    return menus.map((item) => {
      let className = ['yld-menu-vertical-subMenu'];
      /**
       * className
       */
      if (item.children && isSelected(item.children)) {
        className.push('yld-menu-vertical-subMenu-selected');
      }
      if (_selectKey.includes(item.key)) {
        className.push('yld-menu-vertical-subMenu-active');
      }
      if (item.disabled) {
        className.push('yld-menu-vertical-subMenu-disabled');
      }
      /**
       * labelClassName
       */
      let labelClassName = ['yld-menu-vertical-subMenu-label'];
      if (_openKey.includes(item.key)) {
        labelClassName.push('yld-menu-vertical-subMenu-label-open');
      }
      if (item.children) {
        labelClassName.push('yld-menu-vertical-subMenu-parent');
      }
      if (collapsed) {
        labelClassName.push('yld-menu-vertical-subMenu-collapsed');
      }
      return (
        <div
          key={item.key}
          className={className.join(' ')}
          onClick={(e) => {
            e.stopPropagation(); // 阻止冒泡
            onClick(item);
          }}
        >
          {collapsed
            ? renderCollapsedNav(item, labelClassName)
            : renderNav(item, labelClassName, paddingLeft)}
        </div>
      );
    });
  };
  const className = ['yld-menu-vertical'];
  if (collapsed) {
    className.push('yld-menu-vertical-collapsed');
  }
  return (
    <div
      className={className.join(' ')}
      style={{
        ...style,
        width: collapsed ? collapsedWidth : style ? style.width : '100%',
      }}
    >
      {renderMenus(menus, 20)}
    </div>
  );
};
export default MenuVerical;
