import DefaultTheme from 'vitepress/theme'
import { defineClientComponent } from 'vitepress'

import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import './style.css'
// import Button from '../../../src/components/Button.vue'
import '../../../src/styles/index.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    useComponents(ctx.app)
    // ctx.app.component(Button.name, Button)
        const XlButton = defineClientComponent(() => {
      return   import('../../../src/components/Button.vue');
    })


    ctx.app.component('xl-button', XlButton);

  }
}
