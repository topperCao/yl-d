/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { useEffect, useRef } from 'react';
import { AppLayout } from '@yl-d/pro-components';
import uiStore from '../store/ui';
import menus from '@/.lyr/menus';
import navs from '@/.lyr/navs';
import breadcrumbStore from '../store/breadcrumb';
import { Outlet } from 'react-router-dom';
import { favicon, repository } from 'lyr';
import { IconSearch, IconLaunch, IconDown } from '@arco-design/web-react/icon';
import { Input, Button, Dropdown, Menu, Tooltip } from '@arco-design/web-react';

export default () => {
  const layoutRef: any = useRef({});
  const breadcrumb = breadcrumbStore.useSnapshot();
  const { dark, collapsed, primaryColor } = uiStore.useSnapshot();
  const setCollapsed = (v: boolean) => {
    uiStore.collapsed = v;
  };
  // 使用 AppLayout 内置的 监听 hash 方法
  useEffect(() => {
    const removeListener = layoutRef.current.listenHashChange(
      ({ currentBreadcrumb }) => {
        /** 设置当前路由的默认面包屑 */
        breadcrumbStore.title = currentBreadcrumb.title;
        breadcrumbStore.breadcrumb = currentBreadcrumb.breadcrumb;
        /** 滚动到顶部 */
        document
          .querySelector('.app-layout-horizontal-body-right')
          ?.scrollIntoView({
            behavior: 'smooth',
          });
      },
    );
    return removeListener;
  }, []);
  return (
    <AppLayout
      layoutRef={layoutRef}
      layout="horizontal"
      className="lyr-docs-wrap"
      logo={favicon}
      collapsed={collapsed}
      onCollapse={setCollapsed}
      title={
        <h1
          style={{ cursor: 'pointer', color: 'var(--color-text-1)' }}
          onClick={() => {
            location.hash = '/';
          }}
        >
          前端生态包
        </h1>
      }
      dark={dark}
      onDarkChange={async (dark: boolean) => {
        uiStore.dark = dark;
        if (dark) {
          document.body.setAttribute('yld-theme', 'dark');
        } else {
          document.body.removeAttribute('yld-theme');
        }
      }}
      menu={{
        className: 'lyr-docs-wrap-menus',
        items: menus.map((i: any) => ({ ...i, group: true })) as any,
        onClick: ({ path }: any) => {
          location.hash = path;
        },
      }}
      themeColor={primaryColor}
      onSetting={(value: any) => {
        if (value.themeColor) {
          uiStore.primaryColor = value.themeColor;
        }
      }}
      rightContentProps={{
        extra: (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Input
              allowClear
              prefix={<IconSearch />}
              placeholder="搜索文档"
              style={{ width: 180, marginRight: 10 }}
            />
            {navs?.map((nav) => {
              return (
                <Dropdown
                  key={nav.title}
                  droplist={
                    <Menu>
                      {nav.children?.map((item) => {
                        return (
                          <Menu.Item
                            key={item.title}
                            onClick={() => {
                              window.open(item.path);
                            }}
                          >
                            <h4 style={{ margin: 0 }}>{item.title}</h4>
                          </Menu.Item>
                        );
                      })}
                    </Menu>
                  }
                >
                  <Button
                    type="text"
                    size="small"
                    style={{ color: 'var(--color-text-1)' }}
                  >
                    {nav.title}
                    <IconDown
                      style={{ marginLeft: 4, position: 'relative', top: 1 }}
                    />
                  </Button>
                </Dropdown>
              );
            })}
          </div>
        ),
        avatarRender: () => {
          return (
            <Tooltip content="Github">
              <Button
                style={{
                  borderRadius: 'var(--border-radius-circle)',
                  padding: 0,
                  height: 30,
                  width: 30,
                }}
              >
                <a href={repository} target="_blank">
                  <img
                    style={{
                      width: 20,
                      height: 20,
                      position: 'relative',
                      top: 2,
                    }}
                    alt="avatar"
                    src={`https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/image/github-${
                      dark ? 'dark' : 'light'
                    }.png`}
                    onClick={() => {
                      window.open(repository);
                    }}
                  />
                </a>
              </Button>
            </Tooltip>
          );
        },
      }}
      pageHeaderProps={breadcrumb}
      footerRender={() => null}
      siderFooterRender={() => (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderTop: '1px solid var(--color-fill-3)',
          }}
        >
          @ design by
          <a
            style={{ marginLeft: 8 }}
            target="_blank"
            href="https://github.com/yunliang-ding/packages/tree/main/packages/docs"
          >
            @yl-d/docs
            <IconLaunch
              style={{ marginLeft: 8, position: 'relative', top: 1 }}
            />
          </a>
        </div>
      )}
    >
      <Outlet />
    </AppLayout>
  );
};
