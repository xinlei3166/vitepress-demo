# Modal 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基本用法

Modal 弹出一个对话框，适合需要定制性更大的场景。

<ClientOnly> <button-demo></button-demo> </ClientOnly>

## Attributes

| 参数    | 说明         | 类型     | 可选值       | 默认值 |
| ------- | ------------ | -------- | ------------ | ------ |
| visible | 是否展示     | boolean  | true / false | normal |
| ok      | 确认触发函数 | function | ()=>{}       | —      |
| cancel  | 取消触发函数 | function | ()=>{}       | —      |

