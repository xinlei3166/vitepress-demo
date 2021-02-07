import ButtonDemo from '../components/button/demo.vue'
import DemoBlock from '../components/demo/block.vue'
import Demo from '../components/demo/index.vue'
export function registerComponents(app) {
  app.component('ButtonDemo', ButtonDemo)
  app.component('DemoBlock', DemoBlock)
  app.component('Demo', Demo)
}
