import { defineConfig } from 'lyr';

export default defineConfig({
  title: '@yl-d/components',
  favicon: 'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/favicon.ico',
  link: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/monaco-file-icon.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/components.min.css',
  ],
  devScript: [
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/axios.min.js",
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/aliyun-oss-sdk.min.js',
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.development.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.development.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/router.development.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router.development.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.development.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco-icon.min.js",
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/bignumber.min.js',
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/babel-standalone.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-markdown.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/components.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/code-editor.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/shared.min.js",
  ],
  buildScript: [
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/axios.min.js",
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/aliyun-oss-sdk.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.production.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.production.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/router.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco-icon.min.js',
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js",
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/bignumber.min.js',
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/babel-standalone.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-markdown.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/components.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/code-editor.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/shared.min.js",
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/track.min.js',
  ],
  serverPath: '/apis',
  docsRequire: {
    ArcoDesign: '@arco-design/web-react',
    ArcoIcon: '@arco-design/web-react/icon',
    lyrShared: '@yl-d/shared',
    axios: 'axios',
  },
  navs: [
    {
      title: '周边生态',
      children: [
        {
          title: '@yl-d/shared',
          path: 'https://dev-ops.yunliang.cloud/website/lyr-shared',
        },
        {
          title: '@yl-d/low-code',
          path: 'https://dev-ops.yunliang.cloud/website/lyr-low-code',
        },
        {
          title: '@yl-d/code-editor',
          path: 'https://dev-ops.yunliang.cloud/website/lyr-code-editor',
        },
      ],
    },
    {
      title: '脚手架',
      children: [
        {
          title: 'lyr-cli',
          path: 'https://dev-ops.yunliang.cloud/website/lyr-cli',
        },
        {
          title: 'lyr-docs',
          path: 'https://dev-ops.yunliang.cloud/website/lyr-docs',
        },
      ],
    },
  ],
  menus: [
    {
      label: '介绍',
      path: '/',
    },
    {
      label: '表单相关',
      path: '/components',
      children: [
        {
          label: 'Form 基本用法',
          path: '/components/form-base',
        },
        {
          label: 'Form 高级用法',
          path: '/components/form-advance',
        },
        {
          label: 'CardForm 卡片',
          path: '/components/card-form',
        },
        {
          label: 'CreateModal 弹出层',
          path: '/components/create-modal',
        },
        {
          label: 'CreateDrawer 抽屉',
          path: '/components/create-drawer',
        },
        {
          label: 'StepForm 分布操作',
          path: '/components/step-form',
        },
        {
          label: 'AnchorCardForm 锚点',
          path: '/components/anchor-card-form',
        },
        {
          label: 'Search 查询',
          path: '/components/search',
        },
        {
          label: 'TableList 编辑表格',
          path: '/components/table-list',
        },
        {
          label: 'OssFileUpload 上传',
          path: '/components/oss-file-upload',
        },
      ],
    },
    {
      label: '数据展示',
      path: '/display',
      children: [
        {
          label: 'Table 数据表格',
          path: '/display/table',
        },
        {
          label: 'AnchorCard 锚点卡片',
          path: '/display/anchor-card',
        },
        {
          label: 'AppLayout 应用布局',
          path: '/display/app-layout',
        },
      ],
    },
    {
      label: '拖拽相关',
      path: '/dnd',
      children: [
        {
          label: 'DragWrapper 拖拽',
          path: '/dnd/drag-wrapper',
        },
        {
          label: 'DragList 拖拽序列',
          path: '/dnd/drag-list',
        },
        {
          label: 'DragForm 拖拽表单',
          path: '/dnd/drag-form',
        },
      ],
    },
    {
      label: '其他',
      path: '/other',
      children: [
        {
          label: 'Button 扩展',
          path: '/other/button',
        },
        {
          label: 'Suspend 悬浮容器',
          path: '/other/suspend',
        },
      ],
    },
    {
      label: '状态管理',
      path: '/state',
      children: [
        {
          label: 'createStore',
          path: '/state/create-store',
        },
      ],
    },
    {
      label: '自定义 hooks',
      path: '/hooks',
      children: [
        {
          label: 'useRefesh',
          path: '/hooks/use-refresh',
        },
        {
          label: 'useUpdateEffect',
          path: '/hooks/use-update-effect',
        },
        {
          label: 'useFullscreen',
          path: '/hooks/use-fullscreen',
        },
        {
          label: 'useReactive',
          path: '/hooks/use-reactive',
        },
      ],
    },
    {
      label: '更新日志',
      path: '/logs',
    },
  ],
});
