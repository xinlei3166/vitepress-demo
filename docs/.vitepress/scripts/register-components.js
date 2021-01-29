#!/usr/bin/env node
// 参考 https://github.com/em2046/nova-next
const glob = require('globby')
const camelCase = require('camelcase')
const { format } = require('./help')
const fs = require('fs')
const path = require('path')

const vitePressDir = 'docs/.vitepress'
const componentDir = 'components'
const outputPath = 'theme/register-components.js'
console.log(path.join(vitePressDir, componentDir))

function importTemplate(path, componentName) {
  return `import ${componentName} from '../${componentDir}/${path}'`
}

function registerTemplate(path, componentName) {
  return `app.component('${componentName}', ${componentName})`
}

function componentTemplate(path) {
  const componentName = camelCase(path.slice(0, -4).replace(/[/\\]/g, '-'), {pascalCase: true})

  return {
    import: importTemplate(path, componentName),
    register: registerTemplate(path, componentName),
  }
}

function componentsTemplate(codeImports, codeRegisters) {
  return `${codeImports}
export function registerComponents(app) {
  ${codeRegisters}
}
`
}

function registerComponents() {
  const dir = path.join(vitePressDir, componentDir)
  const files = glob.sync('**/*.vue', {
    cwd: dir,
  })
  const codes = files.map((file) => componentTemplate(file))
  const codeImports = codes.map((code) => code.import).join('\n')
  const codeRegisters = codes.map((code) => code.register).join('\n')
  const content = componentsTemplate(codeImports, codeRegisters)
  const formattedContent = format(content, { parser: 'babel' })

  fs.writeFileSync(
    path.join(vitePressDir, outputPath),
    formattedContent
  )
}

registerComponents()
