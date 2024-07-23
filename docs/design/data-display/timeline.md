## 基本使用

```tsx | react
import { Timeline, Icon } from '@yl-d/design';

export default () => {
  return (
    <Timeline
      items={[
        {
          title: 'Network problems being solved 2015-09-01',
        },
        {
          title: (
            <>
              <p>Solve initial network problems 1</p>
              <p>Solve initial network problems 2</p>
              <p>Solve initial network problems 3 2015-09-01</p>
              <p>Solve initial network problems 3 2015-09-01</p>
              <p>Solve initial network problems 3 2015-09-01</p>
              <p>Solve initial network problems 3 2015-09-01</p>
            </>
          ),
        },
        {
          title: 'Solve initial network problems 2015-09-01',
          dot: (
            <Icon
              primary
              type="message_SendSuccessfully"
              size={14}
              style={{ left: 2 }}
            />
          ),
        },
        {
          title: 'Technical testing 2015-09-01',
          color: 'red',
        },
      ]}
    />
  );
};
```
