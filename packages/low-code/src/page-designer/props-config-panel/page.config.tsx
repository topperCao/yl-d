import { SchemaProps } from '@yl-d/pro-components';

export default [
  {
    widget: 'CodeEditor',
    name: 'onMount',
    label: '页面加载完钩子',
    props: {
      mode: 'function',
      useEncrypt: true,
    },
  },
  {
    widget: 'BlockQuote',
    props: {
      title: '头部信息设置',
    },
  },
  {
    widget: 'CodeEditor',
    name: 'title',
    label: '标题渲染',
    extra: '仅在渲染阶段生效',
    props: {
      mode: 'function',
      useEncrypt: true,
    },
  },
  {
    widget: 'CodeEditor',
    name: 'breadcrumb',
    label: '设置面包屑',
    props: {
      mode: 'json',
    },
  },
  {
    widget: 'CodeEditor',
    name: 'extra',
    label: '设置操作按钮',
    props: {
      mode: 'json',
    },
  },
  {
    widget: 'CodeEditor',
    name: 'descriptions',
    label: '设置描述信息',
    props: {
      mode: 'json',
    },
  },
  {
    widget: 'CodeEditor',
    name: 'tabList',
    label: '选项卡设置',
    props: {
      mode: 'json',
    },
  },
  {
    widget: 'Input',
    name: 'activeKey',
    label: '选项卡选中值',
  },
  {
    widget: 'CodeEditor',
    label: '切换选项卡回调',
    name: 'onTabChange',
    props: {
      mode: 'function',
      useEncrypt: true,
    },
  },
  {
    widget: 'CodeEditor',
    name: 'footer',
    label: '底部操作按钮',
    props: {
      mode: 'json',
    },
  },
] as SchemaProps[];
