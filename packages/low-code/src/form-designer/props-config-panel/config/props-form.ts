/**
 * Form的属性配置
 */
import { SchemaProps } from '@yl-d/pro-components';

const schema: SchemaProps<{}>[] = [
  {
    widget: 'Input',
    name: 'title',
    label: '表单标题',
  },
  {
    widget: 'RadioGroup',
    name: 'column',
    label: '容器排版',
    props: {
      optionType: 'button',
      options: [
        {
          label: '1列',
          value: 1,
        },
        {
          label: '2列',
          value: 2,
        },
        {
          label: '3列',
          value: 3,
        },
      ],
    },
  },
  {
    widget: 'RadioGroup',
    name: 'layout',
    label: '布局方式',
    props: {
      optionType: 'button',
      options: [
        {
          label: 'inline',
          value: 'inline',
        },
        {
          label: 'vertical',
          value: 'vertical',
        },
        {
          label: 'horizontal',
          value: 'horizontal',
        },
      ],
    },
  },
  {
    widget: 'RadioGroup',
    name: 'actionAlign',
    label: '操作按钮位置',
    props: {
      optionType: 'button',
      options: [
        {
          label: '左对齐',
          value: 'start',
        },
        {
          label: '剧中',
          value: 'center',
        },
        {
          label: '右对齐',
          value: 'end',
        },
      ],
    },
  },
  {
    widget: 'CodeEditor',
    name: 'onSubmit',
    label: '表单提交',
    props: {
      noChangeClearCode: true,
      mode: 'function',
      useEncrypt: true,
      defaultCode: `async (values) => {
  
}`,
    },
  } as any,
];

export default schema;
