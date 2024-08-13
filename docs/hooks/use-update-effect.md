## useUpdateEffect

> 用法等同于 useEffect，但是会忽略首次执行，只在依赖更新时执行。

```tsx | react
import { useUpdateEffect } from "@yl-d/hooks";

export default () => {
  const [age, setAge] = React.useState(0);
  useUpdateEffect(() => {
    console.log("new age ->", age);
  }, [age]);
  return (
    <div>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        +1
      </button>
      &nbsp;&nbsp;
      age: {age}
    </div>
  );
};
```