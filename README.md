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
![image](https://github.com/xinlei3166/vitepress-demo/assets/22881872/13820eb2-c0fb-4cd8-95d0-8431782bb6ac)


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


![vitepress-demo-example](https://github.com/xinlei3166/vitepress-demo/assets/22881872/67638b21-c995-4870-b5e7-fbdc85eddfea)




