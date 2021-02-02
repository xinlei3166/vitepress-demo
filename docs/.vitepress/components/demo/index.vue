<template>
  <div
    :class="['demo-block', blockClass, customClass ? customClass : '', { hover } ]"
    @mouseenter="hover=true"
    @mouseleave="hover=false">
    <div class="source">
      <slot/>
    </div>
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots.description">
        <slot name="description"/>
      </div>
      <div class="highlight">
        <slot name="highlight"/>
      </div>
    </div>
    <div
        class="demo-block-control"
        ref="control"
        :class="{ 'is-fixed': fixedControl }"
        @click="isExpanded=!isExpanded">
      <transition name="arrow-slide">
        <svg :class="['icon', 'control-icon',  { 'hovering': hover }]" aria-hidden="true">
          <use v-show="!isExpanded" xlink:href="#icon-caret-down"></use>
          <use v-show="isExpanded" xlink:href="#icon-caret-up"></use>
        </svg>
      </transition>
      <transition name="text-slide">
        <span v-show="hover" class="control-text">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue'

export default {
  name: 'DemoBlock',
  props: {
    customClass: String
  },
  setup (props, context) {
    const hrefArr = window.location.href.split('/')
    const component = hrefArr[hrefArr.length - 1].split('.')[0]
    const blockClass = computed(() => {
      return `demo-${component}`
    })

    const hover = ref(false)
    const fixedControl = ref(false)
    const isExpanded = ref(false)
    const controlText = computed(() => {
      return isExpanded.value ? '隐藏代码' : '显示代码'
    })

    onMounted(() => {
      context.$nextTick(() => {
        let highlight = context.$el.getElementsByClassName('highlight')[0]
        if (context.$el.getElementsByClassName('description').length === 0) {
          highlight.style.width = '100%'
          highlight.borderRight = 'none'
        }
      })
    })

    return { blockClass, hover, fixedControl, isExpanded, controlText }
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
  width: 868px;
}

.demo-block-control .control-icon {
  font-size: 16px;
  height: 44px;
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
  transition: .3s;
  display: inline-block;
}

.demo-block-control:hover {
  color: #409EFF;
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
