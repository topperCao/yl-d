import { FormInstance, FormItemProps } from '@yl-d/design';
import { BigNumber } from '@yl-d/shared';

export default (form: FormInstance) =>
  [
    {
      type: 'Select',
      label: '联系人类型',
      name: 'userType',
      required: true,
      props: {
        options: [
          {
            label: '联系人类型1',
            value: 1,
          },
          {
            label: '联系人类型2',
            value: 2,
          },
        ],
      },
    },
    {
      type: 'InputNumber',
      label: '收入总和(元)',
      name: 'totalAmount',
      disabled: true,
      tooltip: '子表单收入合计',
    },
    {
      type: 'FormList',
      name: 'contactList',
      label: '联系人表单',
      required: true,
      span: 3,
      props: {
        title: '联系人',
        maxCount: 3, // 最多3条
        // operation: false, // 不可操作
        // readOnly: true // 只读
        // disabled: true // 禁用
        leastOne: true, // 至少一条
        column: 2, // 3列
        children: [
          {
            type: 'Input',
            name: 'name',
            label: '姓名',
            required: true,
            notifiRender: [
              {
                name: 'amount',
              },
            ],
          },
          {
            type: 'InputNumber',
            name: 'amount',
            label: '收入(元)',
            required: true,
            disabled: ({ getValues }) => {
              console.log("form2 is is", !!getValues().name);
              return !getValues().name
            },
            props: {
              onChange() {
                const contactList = form.getValues().contactList;
                const amount = contactList
                  .filter((i) => !!i?.amount)
                  .map((i) => i?.amount);
                if (Array.isArray(amount) && amount.length > 0) {
                  form.setValues({
                    totalAmount: BigNumber.add(...amount),
                  });
                }
              },
            },
          },
          {
            type: 'CheckGroup',
            name: 'liked',
            label: '爱好',
            required: true,
            tooltip: '和联系人类型关联',
            props: {
              options: async ({ getValues }) => {
                return [
                  {
                    label: '听音乐',
                    value: 1,
                  },
                  {
                    label: '学习',
                    value: 2,
                  },
                  {
                    label: '跑步健身',
                    value: 3,
                  },
                  {
                    label: '联动选项',
                    value: 4,
                    disabled: getValues()?.userType === 1,
                  },
                ];
              },
            },
          },
          {
            type: 'Select',
            name: 'sex',
            label: '性别',
            required: true,
            notifiRender: [
              {
                name: 'age',
                clear: true,
              },
            ],
            props: {
              options: [
                {
                  label: '男',
                  value: 1,
                },
                {
                  label: '女',
                  value: 2,
                },
              ],
            },
          },
          {
            type: 'Input',
            name: 'age',
            label: '年龄',
            required: true,
            visible({ getValues }) {
              return getValues().sex === 1;
            },
          },
        ],
      },
    },
  ] as FormItemProps[];
