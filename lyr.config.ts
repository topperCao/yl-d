import { defineConfig } from 'lyr';

export default defineConfig({
  title: 'packages',
  favicon: 'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/favicon.ico',
  monorepo: true,
  link: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/monaco-file-icon.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-object-viewer.min.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-console.min.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/components.min.css',
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
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/components.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/code-editor.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/shared.min.js',
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
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/components.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/code-editor.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/shared.min.js',
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
        '@yr-d/shared': 'lyrShared',
        '@yl-d/code-editor': 'lyrCodeEditor',
        '@yl-d/low-code': 'lyrLowCode',
      },
    };
  },
  navs: [
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
      label: '@yl-d/shared',
      path: '/shared',
      children: [
        {
          label: '介绍',
          path: '/shared',
        },
        {
          label: '组件',
          path: '/shared/components',
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
      label: '@yl-d/components',
      path: '/components',
      children: [
        {
          label: '介绍',
          path: '/components',
        },
        {
          label: '表单相关',
          path: '/components/form',
          children: [
            {
              label: 'Form 基本用法',
              path: '/components/form/form-base',
            },
            {
              label: 'Form 高级用法',
              path: '/components/form/form-advance',
            },
            {
              label: 'CardForm 卡片',
              path: '/components/form/card-form',
            },
            {
              label: 'CreateModal 弹出层',
              path: '/components/form/create-modal',
            },
            {
              label: 'CreateDrawer 抽屉',
              path: '/components/form/create-drawer',
            },
            {
              label: 'StepForm 分布操作',
              path: '/components/form/step-form',
            },
            {
              label: 'AnchorCardForm 锚点',
              path: '/components/form/anchor-card-form',
            },
            {
              label: 'Search 查询',
              path: '/components/form/search',
            },
            {
              label: 'TableList 编辑表格',
              path: '/components/form/table-list',
            },
            {
              label: 'OssFileUpload 上传',
              path: '/components/form/oss-file-upload',
            },
          ],
        },
        {
          label: '数据展示',
          path: '/components/display',
          children: [
            {
              label: 'Table 数据表格',
              path: '/components/display/table',
            },
            {
              label: 'AnchorCard 锚点卡片',
              path: '/components/display/anchor-card',
            },
            {
              label: 'AppLayout 应用布局',
              path: '/components/display/app-layout',
            },
          ],
        },
        {
          label: '拖拽相关',
          path: '/components/dnd',
          children: [
            {
              label: 'DragWrapper 拖拽',
              path: '/components/dnd/drag-wrapper',
            },
            {
              label: 'DragList 拖拽序列',
              path: '/components/dnd/drag-list',
            },
            {
              label: 'DragForm 拖拽表单',
              path: '/components/dnd/drag-form',
            },
          ],
        },
        {
          label: '其他',
          path: '/components/other',
          children: [
            {
              label: 'Button 扩展',
              path: '/components/other/button',
            },
            {
              label: 'Suspend 悬浮容器',
              path: '/components/other/suspend',
            },
          ],
        },
        {
          label: '状态管理',
          path: '/components/state',
          children: [
            {
              label: 'createStore',
              path: '/components/state/create-store',
            },
          ],
        },
        {
          label: '自定义 hooks',
          path: '/components/hooks',
          children: [
            {
              label: 'useRefesh',
              path: '/components/hooks/use-refresh',
            },
            {
              label: 'useUpdateEffect',
              path: '/components/hooks/use-update-effect',
            },
            {
              label: 'useFullscreen',
              path: '/components/hooks/use-fullscreen',
            },
            {
              label: 'useReactive',
              path: '/components/hooks/use-reactive',
            },
          ],
        },
        {
          label: '更新日志',
          path: '/components/logs',
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
        },
        {
          label: '组件',
          path: '/code-editor/components',
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
        },
        {
          label: '组件',
          path: '/low-code/components',
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
  ],
});
