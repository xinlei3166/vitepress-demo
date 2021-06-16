<template>
  <demo-code :demo-component="InputDemo"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import InputDemo from './demo.vue'

export default defineComponent({
  setup() {
    return {
      InputDemo
    }
  }
})
</script>

<style scoped>

</style>
