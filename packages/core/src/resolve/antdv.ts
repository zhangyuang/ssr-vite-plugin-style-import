import type { Lib } from '../typing'

export function AndDesignVueResolve(): Lib {
  return {
    ensureStyleFile: true,
    libraryName: 'ant-design-vue',
    esModule: true,
    resolveStyle: (name) => {
      return `ant-design-vue/es/${name}/style/index`
    },
  }
}
