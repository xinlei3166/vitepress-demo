import ButtonDemo from '../components/button/demo.vue'
import DemoBlock from '../components/demo/block.vue'
import DemoCode from '../components/demo/code.vue'
import Demo from '../components/demo/index.vue'
import DemoSource from '../components/demo/source.vue'
import InputDemo from '../components/input/demo.vue'
import InputDoc from '../components/input/doc.vue'
export function registerComponents(app) {
  app.component('ButtonDemo', ButtonDemo)
  app.component('DemoBlock', DemoBlock)
  app.component('DemoCode', DemoCode)
  app.component('Demo', Demo)
  app.component('DemoSource', DemoSource)
  app.component('InputDemo', InputDemo)
  app.component('InputDoc', InputDoc)
}
