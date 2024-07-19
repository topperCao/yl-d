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
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.development.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.development.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/router.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco-icon.min.js',
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/babel-standalone.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-markdown.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/bignumber.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/html2canvas.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jszip.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/pizzip.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/file-saver.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/docxtemplater.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-object-viewer.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-console.min.js",
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/components.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/code-editor.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/shared.min.js',
  ],
  buildScript: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.production.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.production.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/router.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco-icon.min.js',
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/babel-standalone.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-markdown.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/bignumber.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/html2canvas.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jszip.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/pizzip.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/file-saver.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/docxtemplater.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-object-viewer.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/luna-console.min.js",
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/components.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/code-editor.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/shared.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/track.min.js',
  ],
  serverPath: '/apis',
  docsRequire: {
    ArcoDesign: '@arco-design/web-react',
  },
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
      ]
    },
  ],
});
