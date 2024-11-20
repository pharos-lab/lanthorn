import * as components from './components';
import { useTheme } from '@/composables/useTheme.js'

const { theme, getClasses, getClassess } = useTheme()

const lantern = {
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName];
      Vue.component(component.name, component);
    }

    Vue.provide('theme', theme)
    Vue.provide('getClasses', getClasses)
    Vue.provide('getClassess', getClassess)
  },
};

export { lantern };