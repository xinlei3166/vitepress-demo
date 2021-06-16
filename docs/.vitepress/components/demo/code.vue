<template>
  <div
      :class="['demo-block', blockClass, customClass ? customClass : '', { hover } ]"
      @mouseenter="hover=true"
      @mouseleave="hover=false">
    <div class="source">
      <demo-source v-if="demoComponent" :component="demoComponent"/>
    </div>
    <div class="meta" ref="meta">
      <div v-if="$slots.description" class="description" ref="description">
        <slot name="description"/>
      </div>
      <div class="highlight" ref="highlight">
        <slot name="highlight"/>
      </div>
    </div>
    <div
        class="demo-block-control"
        ref="control"
        :class="{ 'is-fixed': fixedControl }"
        @click="isExpanded=!isExpanded">
      <transition name="arrow-slide">
        <i :class="['iconfont', 'control-icon', { 'icon-caret-down': !isExpanded, 'icon-caret-up': isExpanded, 'hovering': hover }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hover" class="control-text">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref, shallowRef, reactive, computed, watch, onMounted, onBeforeMount, onBeforeUnmount, nextTick, getCurrentInstance } from 'vue'
import { throttle } from 'lodash-es'

export default {
  name: 'DemoCode',
  props: {
    customClass: String,
    demoComponent: Object
  },
  setup (props, context) {
    const vm = getCurrentInstance()
    const pathArr = vm.appContext.config.globalProperties.$page.relativePath.split('/')
    const component = pathArr[pathArr.length - 1].split('.')[0]
    const blockClass = computed(() => {
      return `demo-${component}`
    })

    const hover = ref(false)
    const fixedControl = ref(false)
    const isExpanded = ref(false)
    const controlText = computed(() => {
      return isExpanded.value ? '隐藏代码' : '显示代码'
    })

    // template refs
    const highlight = ref(null)
    const description = ref(null)
    const meta = ref(null)
    const control = ref(null)

    const codeAreaHeight = computed(() => {
      if (description.value) {
        return description.value.clientHeight + highlight.value.clientHeight + 20
      }
      return highlight.value.clientHeight
    })

    const _scrollHandler = () => {
      const { top, bottom, left } = meta.value.getBoundingClientRect()
      const innerHeight = window.innerHeight || document.body.clientHeight
      fixedControl.value = bottom > innerHeight && top + 44 <= innerHeight
      control.value.style.left = fixedControl.value ? `${ left }px` : '0'
    }
    const scrollHandler = throttle(_scrollHandler, 200)
    const removeScrollHandler = () => {
      window.removeEventListener('scroll', scrollHandler)
    }

    watch(isExpanded, val => {
      meta.value.style.height = val ? `${ codeAreaHeight.value + 1 }px` : '0'
      if (!val) {
        fixedControl.value = false
        control.value.style.left = '0'
        removeScrollHandler()
        return
      }
      setTimeout(() => {
        window.addEventListener('scroll', scrollHandler)
        _scrollHandler()
      }, 300)
    })

    onMounted(() => {
      nextTick(() => {
        if (!description.value) {
          highlight.value.style.width = '100%'
        }
      })
    })


    onBeforeUnmount(() => {
      removeScrollHandler()
    })

    return { blockClass, hover, fixedControl, isExpanded, controlText, highlight, description, meta, control }
  }
}
</script>

<style scoped>
.demo-block {
  border: solid 1px #ebebeb;
  border-radius: 3px;
  transition: .2s;
}

.demo-block.hover {
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
}

.source {
  box-sizing: border-box;
  padding: 24px;
  transition: .2s;
}

.meta {
  border-top: solid 1px #ebebeb;
  background-color: var(--code-bg-color);
  overflow: hidden;
  height: 0;
  transition: height .2s;
}

.description {
  border: solid 1px #ebebeb;
  border-radius: 3px;
  padding: 20px;
  box-sizing: border-box;
  line-height: 26px;
  color: var(--c-text);
  word-break: break-word;
  margin: 10px 10px 6px 10px;
  background-color: #fff;
}

.demo-block-control {
  border-top: solid 1px #eaeefb;
  height: 44px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: #d3dce6;
  cursor: pointer;
  position: relative;
}

.demo-block-control.is-fixed {
  position: fixed;
  bottom: 0;
  width: calc(100% - 320px - 48px - 200px - 1px);
  border-right: solid 1px #eaeefb;
  z-index: 1;
}

.demo-block-control .control-icon {
  display: inline-block;
  font-size: 16px;
  line-height: 44px;
  transition: .3s;
}
.demo-block-control .control-icon.hovering {
  transform: translateX(-40px);
}

.demo-block-control .control-text {
  position: absolute;
  transform: translateX(-30px);
  font-size: 14px;
  line-height: 44px;
  font-weight: 500;
  transition: .3s;
  display: inline-block;
}

.demo-block-control:hover {
  color: var(--c-brand);
  background-color: #f9fafc;
}

.demo-block-control .text-slide-enter,
.demo-block-control .text-slide-leave-active {
  opacity: 0;
  transform: translateX(10px);
}

.demo-block-control .control-button {
  line-height: 26px;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  padding-left: 5px;
  padding-right: 25px;
}
</style>
<style>
.highlight div[class*='language-'] {
  margin: 0 !important;
}
</style>
