import * as components from './components';
import { useTheme } from '@/composables/useTheme.js'

const { theme, getClasses, getClass, getClassesObject } = useTheme()
const config = useTheme()

const lantern = {
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName];
      Vue.component(component.name, component);
    }

    Vue.provide('theme', theme)
    Vue.provide('getClasses', getClasses)
    Vue.provide('getClass', getClass)
    Vue.provide('getClassesObject', getClassesObject)
    Vue.provide('config', config)
  },
};

export { lantern };