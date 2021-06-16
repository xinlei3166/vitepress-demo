<template>
  <component :is="component" />
</template>

<script>
export default {
  name: 'DemoSource',
  props: {
    component: Object
  },
  data() {
    return {
      html: ''
    }
  },
  mounted() {
    // this.html = this.component.__sourceCode
    // console.log(this.component)
  }
}
</script>

<style scoped>

</style>
