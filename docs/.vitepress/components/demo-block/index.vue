<template>
  <div class="demo-block" :class="[customClass ? customClass : '']">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'DemoBlock',
  props: {
    customClass: String
  }
}
</script>

<style scoped>
.demo-block {
  border: solid 1px #ebebeb;
  border-radius: 3px;
  margin-top: 10px;
  padding: 24px;
  transition: .2s;
}
</style>
