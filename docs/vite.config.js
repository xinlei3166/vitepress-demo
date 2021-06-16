import fs from 'fs'
import { baseParse } from '@vue/compiler-core'

const createDemoBlockPlugin = () => {}

export default {
  // 文档可以直接输出让开发者使用的代码
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { code, path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file)
      const title = parsed.children[0].content
      const main = file.split(parsed.loc.source).join('').trim()
      return `export default function (Component) {
        Component.__sourceCode = ${
        JSON.stringify(file)
      }
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
        }`.trim()
    }
  }
}

