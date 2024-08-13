## useReactive

> 提供一种数据响应式的操作体验，定义数据状态不需要写 useState，直接修改属性即可刷新视图。

```tsx | react
import { useReactive } from '@yl-d/hooks';

export default () => {
  const state = useReactive({
    count: 0,
    age: 0,
    list: [1, 2, 3, 4, 5],
    user: {
      baseInfo: {
        age: 0,
      },
    },
  });
  console.log('state ->', state);
  return (
    <>
      <div>
        <button
          onClick={() => {
            state.count++;
          }}
        >
          +1
        </button>
        &nbsp; &nbsp; count: {state.count}
      </div>
      <br />
      <div>
        <button
          onClick={() => {
            state.user.baseInfo.age++;
          }}
        >
          +1
        </button>
        &nbsp; &nbsp; age: {state.user.baseInfo.age}
      </div>
      <br />
      <div>
        <button
          onClick={() => {
            state.list.push(100);
          }}
        >
          push
        </button>
        &nbsp; &nbsp; list: {state.list.toString()}
      </div>
    </>
  );
};
```
