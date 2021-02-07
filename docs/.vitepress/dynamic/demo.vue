<template>
  <component v-if="dynamicComponent" :is="dynamicComponent">
    <slot></slot>
    <template v-if="$slots.description" #description>
      <slot name="description"></slot>
    </template>
    <template #highlight>
      <slot name="highlight"></slot>
    </template>
  </component>
</template>

<script>
import { shallowRef, onMounted } from 'vue'

export default {
  name: 'Demo',
  setup() {
    const dynamicComponent = shallowRef(null)
    onMounted(() => {
      import('./demo-code-block.vue').then(module => {
        dynamicComponent.value = module.default
      })
    })
    return { dynamicComponent }
  }
}
</script>
