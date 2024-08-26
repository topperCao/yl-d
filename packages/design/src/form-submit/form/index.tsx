import AsyncValidator from 'async-validator';
import { useRef, useEffect, useState } from 'react';
import { FormProps, FormRefInstance } from './type.form';
import Item from './item';
import './index.less';

const Form = ({
  initialValues = {},
  onValuesChange = () => {},
  schema = [],
  column = 1,
  className,
  horizontal = false,
  disabled = false,
  style = {},
  ...rest
}: FormProps) => {
  const form = rest.form || Form.useForm();
  const [done, setDone] = useState(false);
  const store = useRef(initialValues);
  const descriptorRef: any = useRef({});
  const itemRef: any = useRef({});
  const errorItemRef: any = useRef([]); // 保存上一次检验失败的字段
  // 通知 item 更新
  const itemUpdateOnStoreChange = () => {
    Object.keys(itemRef.current).forEach((name) => {
      itemRef.current[name].setValue(store.current[name]);
    });
  };
  useEffect(() => {
    store.current = initialValues;
    itemUpdateOnStoreChange();
  }, [initialValues]);
  // 挂 api
  useEffect(() => {
    Object.assign(form, {
      mergeItemByName(name, item) {
        itemRef.current[name].setItem(item);
      },
      getValues: () => {
        return store.current;
      },
      setValues: (values: any) => {
        store.current = {
          ...store.current,
          ...values,
        };
        itemUpdateOnStoreChange();
      },
      clearValues: () => {
        store.current = {};
        itemUpdateOnStoreChange();
      },
      validateField: (name: string, value: any) => {
        const validator = new AsyncValidator({
          [name]: descriptorRef.current[name],
        });
        validator.validate({ [name]: value }, (errors) => {
          if (errors) {
            errors.map((error) => {
              itemRef.current[error.field].showError(error.message);
            });
          } else if (
            Array.isArray(value) &&
            value.filter((i) => i !== undefined).length === 0
          ) {
            itemRef.current[name].showError(
              descriptorRef.current[name].message,
            );
          } else {
            itemRef.current[name].clearError();
          }
        });
      },
      validateFields: async () => {
        const validator = new AsyncValidator(descriptorRef.current);
        const values = form.getValues();
        return new Promise((res, rej) => {
          validator.validate(values, (errors) => {
            if (errors) {
              errors.map((error) => {
                itemRef.current[error.field].showError(error.message);
              });
              // 找到在errorItemRef里面却不在errors里的需要清除下
              const needClear = errorItemRef.current.filter(
                (i) => !errors.some((error) => error.field === i.field),
              );
              needClear.map((error) => {
                itemRef.current[error.field].clearError();
              });
              errorItemRef.current = errors; // 更新
              rej(errors);
            } else {
              errorItemRef.current.map((error) => {
                itemRef.current[error.field].clearError();
              });
              errorItemRef.current = []; // 清空
              res(values);
            }
          });
        });
      },
    });
    setDone(true);
  }, []);
  const classNames = ['yld-form', `yld-form-grid-${column}`];
  if (className) {
    classNames.push(className);
  }
  if (horizontal) {
    classNames.push('yld-form-horizontal');
  }
  // 兼容下函数
  const formSchema = typeof schema === 'function' ? schema(form) : schema;
  /** 渲染 Item */
  const RenderItem = ({ item }) => {
    if (item.type === 'FieldSet') {
      return (
        <div className="yld-form-fieldset">
          <div className="yld-form-fieldset-head">{item.label}</div>
          <div
            className={`yld-form-fieldset-body yld-form-grid-${
              item.props?.column || 1
            }`}
          >
            {item.props?.children?.map((item: any) => {
              return <RenderItem item={item} />;
            })}
          </div>
        </div>
      );
    }
    itemRef.current[item.name] = itemRef.current[item.name] || {}; // 保留之前的ref
    return (
      <Item
        item={item}
        form={form}
        column={column}
        horizontal={horizontal}
        disabled={disabled}
        itemRef={itemRef.current[item.name]}
        descriptorRef={descriptorRef}
        value={store.current[item.name]}
        onChange={(e: any, option: any) => {
          const value = e?.eventPhase ? e.target.value : e;
          form.setValues({
            [item.name]: value,
          });
          // 校验自己
          if (descriptorRef.current[item.name]) {
            form.validateField(item.name, value);
          }
          onValuesChange(
            {
              [item.name]: store.current[item.name],
            },
            form.getValues(),
            form,
          );
          if (typeof item.props?.onChange === 'function') {
            item.props.onChange(value, option, form);
          }
          // 提示该item拿最新的value去更新, 确保原子性，哪个 item 值改变，就更新 哪个 item
          itemRef.current[item.name].setValue?.(store.current[item.name]);
          /** 触发重新渲染 */
          if (Array.isArray(item.notifiRender)) {
            item.notifiRender.forEach(({ name, clear }) => {
              itemRef.current[name].reload();
              // 是否清空
              if (clear) {
                form.setValues({
                  [name]: undefined,
                });
              }
            });
          }
        }}
      />
    );
  };
  return done ? (
    <div className={classNames.join(' ')} style={style}>
      {formSchema.map((item) => {
        return <RenderItem item={item} />;
      })}
    </div>
  ) : null;
};

Form.useForm = () => {
  const ref: FormRefInstance = useRef({
    getValues: () => {},
    setValues: () => {},
    mergeItemByName: () => {},
    validateField: () => {},
    validateFields: () => {},
    clearValues: () => {},
  });
  return ref.current;
};

export default Form;
