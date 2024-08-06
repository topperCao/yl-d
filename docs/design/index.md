```jsx | pureReact
export default () => {
  return (
    <>
      <p
        className="package-version"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          position: 'relative',
          top: 3,
        }}
      >
        <a href={`https://www.npmjs.com/package/@yl-d/design`} target="_blank">
          <img alt="npm" src={`https://img.shields.io/npm/dt/@yl-d/design`} />
        </a>
        <a href={`https://www.npmjs.com/package/@yl-d/design`} target="_blank">
          <img
            alt="NPM downloads"
            src={`https://img.shields.io/npm/v/@yl-d/design.svg`}
          />
        </a>
      </p>
    </>
  );
};
```

## 安装

```js
yarn add @yl-d/design
```

## 说明

- 满足个人日常的开发需求
- 样式风格上借鉴 [arco-design](https://arco.design/react/components/button)
- 目前尚未完善，不建议在真实项目上使用
