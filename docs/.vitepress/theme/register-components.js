import ButtonDemo from '../components/button/demo.vue'
import InputDemo from '../components/input/demo.vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
export function registerComponents(app) {
  app.component('ButtonDemo', ButtonDemo)
  app.component('InputDemo', InputDemo)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
