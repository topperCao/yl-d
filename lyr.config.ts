import { defineConfig } from 'lyr';

export default defineConfig({
  title: '前端生态包',
  favicon:
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/user-logo.png',
  monorepo: true,
  monorepoPackages: ['@yl-d/design'],
  link: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/monaco-file-icon.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-object-viewer.min.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-console.min.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/pro-components.min.css',
  ],
  devScript: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/axios.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/aliyun-oss-sdk.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.development.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.development.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/router.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco-icon.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/babel-standalone.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/prettier-standalone.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/less.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/prettier-parser-typescript.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-markdown.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/bignumber.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/html2canvas.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jszip.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/pizzip.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/file-saver.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/docxtemplater.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-object-viewer.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-console.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/pro-components.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/code-editor.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/shared.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/low-code.min.js',
  ],
  buildScript: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/axios.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/aliyun-oss-sdk.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.production.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.production.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/router.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco-icon.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/babel-standalone.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/prettier-standalone.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/less.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/prettier-parser-typescript.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-markdown.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/bignumber.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/html2canvas.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jszip.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/pizzip.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/file-saver.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/docxtemplater.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-object-viewer.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-console.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/pro-components.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/code-editor.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/shared.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/low-code.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/track.min.js',
  ],
  serverPath: '/apis',
  docsRequire: {
    ArcoDesign: '@arco-design/web-react',
    ArcoIcon: '@arco-design/web-react/icon',
    axios: 'axios',
  },
  webpackConfig() {
    return {
      externals: {
        '@yl-d/low-code': 'lyrLowCode',
      },
    };
  },
  menus: [
    {
      label: '@yl-d/pro-components',
      path: '/pro-components',
      children: [
        {
          label: '介绍',
          path: '/pro-components',
          group: true,
        },
        {
          label: '表单相关',
          path: '/pro-components/form',
          group: true,
          children: [
            {
              label: 'Form 基本用法',
              path: '/pro-components/form/form-base',
            },
            {
              label: 'Form 高级用法',
              path: '/pro-components/form/form-advance',
            },
            {
              label: 'CardForm 卡片',
              path: '/pro-components/form/card-form',
            },
            {
              label: 'CreateModal 弹出层',
              path: '/pro-components/form/create-modal',
            },
            {
              label: 'CreateDrawer 抽屉',
              path: '/pro-components/form/create-drawer',
            },
            {
              label: 'StepForm 分布操作',
              path: '/pro-components/form/step-form',
            },
            {
              label: 'AnchorCardForm 锚点',
              path: '/pro-components/form/anchor-card-form',
            },
            {
              label: 'Search 查询',
              path: '/pro-components/form/search',
            },
            {
              label: 'TableList 编辑表格',
              path: '/pro-components/form/table-list',
            },
            {
              label: 'OssFileUpload 上传',
              path: '/pro-components/form/oss-file-upload',
            },
          ],
        },
        {
          label: '数据展示',
          path: '/pro-components/display',
          group: true,
          children: [
            {
              label: 'Table 数据表格',
              path: '/pro-components/display/table',
            },
            {
              label: 'AnchorCard 锚点卡片',
              path: '/pro-components/display/anchor-card',
            },
            {
              label: 'AppLayout 应用布局',
              path: '/pro-components/display/app-layout',
            },
          ],
        },
        {
          label: '拖拽相关',
          path: '/pro-components/dnd',
          group: true,
          children: [
            {
              label: 'DragWrapper 拖拽',
              path: '/pro-components/dnd/drag-wrapper',
            },
            {
              label: 'DragList 拖拽序列',
              path: '/pro-components/dnd/drag-list',
            },
            {
              label: 'DragForm 拖拽表单',
              path: '/pro-components/dnd/drag-form',
            },
          ],
        },
        {
          label: '其他',
          path: '/pro-omponents/other',
          group: true,
          children: [
            {
              label: 'Button 扩展',
              path: '/pro-components/other/button',
            },
            {
              label: 'Suspend 悬浮容器',
              path: '/pro-components/other/suspend',
            },
          ],
        },
        {
          label: '状态管理',
          path: '/pro-components/state',
          group: true,
          children: [
            {
              label: 'createStore',
              path: '/pro-components/state/create-store',
            },
          ],
        },
        {
          label: '自定义 hooks',
          path: '/pro-components/hooks',
          group: true,
          children: [
            {
              label: 'useRefesh',
              path: '/pro-components/hooks/use-refresh',
            },
            {
              label: 'useUpdateEffect',
              path: '/pro-components/hooks/use-update-effect',
            },
            {
              label: 'useFullscreen',
              path: '/pro-components/hooks/use-fullscreen',
            },
            {
              label: 'useReactive',
              path: '/pro-components/hooks/use-reactive',
            },
          ],
        },
        {
          label: '更新日志',
          path: '/pro-components/logs',
          group: true,
        },
      ],
    },
    {
      label: '@yl-d/shared',
      path: '/shared',
      children: [
        {
          label: '介绍',
          path: '/shared',
          group: true,
        },
        {
          label: '组件',
          path: '/shared/components',
          group: true,
          children: [
            {
              label: 'asyncLoad',
              path: '/shared/components/async-load',
            },
            {
              label: 'BigNumber',
              path: '/shared/components/big-number',
            },
            {
              label: 'babelParse',
              path: '/shared/components/babel-parse',
            },
            {
              label: 'ConsoleRender',
              path: '/shared/components/console-render',
            },
            {
              label: 'copyToClipBoard',
              path: '/shared/components/copy-to-clip-board',
            },
            {
              label: 'docxReplace',
              path: '/shared/components/docx-replace',
            },
            {
              label: 'downloadFile',
              path: '/shared/components/download-file',
            },
            {
              label: 'getElementSnapshot',
              path: '/shared/components/get-element-snapshot',
            },
            {
              label: 'getUrlSearchParams',
              path: '/shared/components/get-url-search-params',
            },
            {
              label: 'MarkdownViewer',
              path: '/shared/components/markdown-viewer',
            },
            {
              label: 'ReactPlayground',
              path: '/shared/components/react-playground',
            },
          ],
        },
      ],
    },
    {
      label: '@yl-d/code-editor',
      path: '/code-editor',
      children: [
        {
          label: '介绍',
          path: '/code-editor',
          group: true,
        },
        {
          label: '组件',
          path: '/code-editor/components',
          group: true,
          children: [
            {
              label: 'FileExplorer 目录展示',
              path: '/code-editor/components/file-explorer',
            },
            {
              label: 'FileEditor 内容展示',
              path: '/code-editor/components/file-editor',
            },
            {
              label: 'FileSearch 文件查找',
              path: '/code-editor/components/file-search',
            },
            {
              label: 'GitManager 源代码管理',
              path: '/code-editor/components/git-manager',
            },
          ],
        },
      ],
    },
    {
      label: '@yl-d/low-code',
      path: '/low-code',
      children: [
        {
          label: '介绍',
          path: '/low-code',
          group: true,
        },
        {
          label: '组件',
          path: '/low-code/components',
          group: true,
          children: [
            {
              label: 'DesignerForm',
              path: '/low-code/components/designer-form',
            },
            {
              label: 'DesignerTable',
              path: '/low-code/components/designer-table',
            },
            {
              label: 'DesignerPage',
              path: '/low-code/components/designer-page',
            },
            {
              label: 'CrudModelRender',
              path: '/low-code/components/crud-model-render',
            },
          ],
        },
      ],
    },
    {
      label: '@yl-d/cli',
      path: '/cli',
      children: [
        {
          label: '介绍',
          path: '/cli',
          group: true,
        },
      ],
    },
    {
      label: '@yl-d/docs',
      path: '/doc',
      children: [
        {
          label: '介绍',
          path: '/doc',
          group: true,
        },
      ],
    },
    {
      label: '@yl-d/design',
      path: '/design',
      children: [
        {
          label: '介绍',
          path: '/design',
          group: true,
        },
        {
          label: '数据展示',
          path: '/design/data-display',
          group: true,
          children: [
            {
              label: 'Avatar',
              path: '/design/data-display/avatar',
            },
            {
              label: 'Badge',
              path: '/design/data-display/badge',
            },
            {
              label: 'Carousel',
              path: '/design/data-display/carousel',
            },
            {
              label: 'Collapse',
              path: '/design/data-display/collapse',
            },
            {
              label: 'Descriptions',
              path: '/design/data-display/descriptions',
            },
            {
              label: 'Empty',
              path: '/design/data-display/empty',
            },
            {
              label: 'List',
              path: '/design/data-display/list',
            },
            {
              label: 'Popover',
              path: '/design/data-display/popover',
            },
            {
              label: 'Space',
              path: '/design/data-display/space',
            },
            {
              label: 'Table',
              path: '/design/data-display/table',
            },
            {
              label: 'Tabs',
              path: '/design/data-display/tabs',
            },
            {
              label: 'Tag',
              path: '/design/data-display/tag',
            },
            {
              label: 'Timeline',
              path: '/design/data-display/timeline',
            },
            {
              label: 'tooltip',
              path: '/design/data-display/tooltip',
            },
            {
              label: 'Tree',
              path: '/design/data-display/tree',
            },
          ],
        },
        {
          label: '表单相关',
          path: '/design/data-entry',
          group: true,
          children: [
            {
              label: 'AutoComplete',
              path: '/design/data-entry/auto-complete',
            },
            {
              label: 'Cascader',
              path: '/design/data-entry/cascader',
            },
            {
              label: 'Checkbox',
              path: '/design/data-entry/checkbox',
            },
            {
              label: 'DatePicker',
              path: '/design/data-entry/date-picker',
            },
            {
              label: 'InputNumber',
              path: '/design/data-entry/input-number',
            },
            {
              label: 'Input',
              path: '/design/data-entry/input',
            },
            {
              label: 'Radio',
              path: '/design/data-entry/radio',
            },
            {
              label: 'Rate',
              path: '/design/data-entry/rate',
            },
            {
              label: 'Select',
              path: '/design/data-entry/select',
            },
            {
              label: 'Slider',
              path: '/design/data-entry/slider',
            },
            {
              label: 'Switch',
              path: '/design/data-entry/switch',
            },
            {
              label: 'TimePicker',
              path: '/design/data-entry/time-picker',
            },
            {
              label: 'Transfer',
              path: '/design/data-entry/transfer',
            },
            {
              label: 'TreeSelect',
              path: '/design/data-entry/tree-select',
            },
            {
              label: 'Upload',
              path: '/design/data-entry/upload',
            },
          ],
        },
        {
          label: '反馈提示',
          path: '/design/feed-back',
          group: true,
          children: [
            {
              label: 'Alert',
              path: '/design/feed-back/alert',
            },
            {
              label: 'Drawer',
              path: '/design/feed-back/drawer',
            },
            {
              label: 'message',
              path: '/design/feed-back/message',
            },
            {
              label: 'Modal',
              path: '/design/feed-back/modal',
            },
            {
              label: 'notification',
              path: '/design/feed-back/notification',
            },
            {
              label: 'Popconfirm',
              path: '/design/feed-back/popconfirm',
            },
            {
              label: 'Progress',
              path: '/design/feed-back/progress',
            },
            {
              label: 'Result',
              path: '/design/feed-back/result',
            },
            {
              label: 'Skeleton',
              path: '/design/feed-back/skeleton',
            },
            {
              label: 'Spin',
              path: '/design/feed-back/spin',
            },
          ],
        },
        {
          label: '导航相关',
          path: '/design/navigation',
          group: true,
          children: [
            {
              label: 'Breadcrumb',
              path: '/design/navigation/breadcrumb',
            },
            {
              label: 'Dropdown',
              path: '/design/navigation/dropdown',
            },
            {
              label: 'Grid',
              path: '/design/navigation/grid',
            },
            {
              label: 'Menu',
              path: '/design/navigation/menu',
            },
            {
              label: 'PageHeader',
              path: '/design/navigation/page-header',
            },
            {
              label: 'Pagination',
              path: '/design/navigation/pagination',
            },
            {
              label: 'Steps',
              path: '/design/navigation/steps',
            },
          ],
        },
        {
          label: '其他',
          path: '/design/other',
          group: true,
          children: [
            {
              label: 'BackTop',
              path: '/design/other/back-top',
            },
            {
              label: 'Button',
              path: '/design/other/button',
            },
            {
              label: 'CopyToClipboard',
              path: '/design/other/copy-to-clipboard',
            },
            {
              label: 'Icon',
              path: '/design/other/icon',
            },
          ],
        },
      ],
    },
  ],
});
