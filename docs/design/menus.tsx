import {
  IconApps,
  IconLanguage,
  IconUser,
  IconThunderbolt,
} from '@yl-d/icon';

export default [
  {
    icon: <IconApps />,
    label: '工作台',
    path: '/workbench',
    children: [
      {
        path: '/workbench/my',
        label: '我的工作台',
      },
    ],
  },
  {
    icon: <IconLanguage />,
    label: '用户管理',
    path: '/user',
    children: [
      {
        icon: <IconUser />,
        label: '用户列表',
        path: '/user/list',
        children: [
          {
            label: '子用户列表',
            path: '/user/list/sub-list',
          },
          {
            label: '添加子管理',
            path: '/user/list/sub-add',
          },
        ],
      },
    ],
  },
  {
    icon: <IconThunderbolt />,
    label: '字典管理',
    path: '/dict',
    children: [
      {
        path: '/dict/list',
        label: '字典列表',
      },
    ],
  },
];
