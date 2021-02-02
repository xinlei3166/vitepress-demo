import theme from 'vitepress/dist/client/theme-default'
import Button from '../../../src/components/Button.vue'
import '../../../src/styles/index.css'
import { registerComponents } from './register-components'
import './iconfont/iconfont'
import './styles/reset.css'
import './styles/var.css'
import './styles/code.css'

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    app.component(Button.name, Button)
    registerComponents(app)
  }
}
