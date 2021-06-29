# Vitepress Demo

基于 [Vitepress-Theme-Demoblock](https://github.com/xinlei3166/vitepress-theme-demoblock) 插件来实现vue组件的支持。

- [x] vue组件

```js
<demo-block>
  <xl-button>默认按钮</xl-button>
  <xl-button type="primary">主要按钮</xl-button>
  <xl-button type="success">成功按钮</xl-button>
  <xl-button type="info">信息按钮</xl-button>
  <xl-button type="warning">警告按钮</xl-button>
  <xl-button type="danger">危险按钮</xl-button>
</demo-block>
```

![image-20210629113103980](https://tva1.sinaimg.cn/large/008i3skNly1gryz9niyqkj31180a2dgm.jpg)



- [x] vue代码自动渲染并且显示对应code（支持script和style）

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。
```vue
<template>
  <xl-button>默认按钮</xl-button>
  <xl-button type="primary">主要按钮</xl-button>
  <xl-button type="success">成功按钮</xl-button>
  <xl-button type="info">信息按钮</xl-button>
  <xl-button type="warning">警告按钮</xl-button>
  <xl-button type="danger">危险按钮</xl-button>
</template>
```
:::


![image-20210629112953325](https://tva1.sinaimg.cn/large/008i3skNly1gryz8i2x8wj61170u0aex02.jpg)

