<!--<demo>-->
<!--示例代码-->
<!--</demo>-->
<template>
  <input class="input" type="text" v-model="input"/>
  <xl-button type="primary" @click="onSubmit">提交</xl-button>
  <div style="margin-top: 16px">输出内容：{{ content }}</div>
</template>

<script>
  import { ref, defineComponent } from 'vue'

  export default defineComponent({
    name: 'InputDemo',
    setup() {
      const input = ref()
      const content = ref()

      function onSubmit() {
        content.value = input.value
      }

      return { input, content, onSubmit }
    }
  })
</script>

<style>
.input {
  border: 1px solid #ebebeb;
  border-radius: 4px;
  padding: 14px;
  width: 300px;
  font-size: 16px;
  margin-right: 16px;
}
</style>

