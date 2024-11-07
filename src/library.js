import * as components from './components';
import { useTheme } from '@/composables/useTheme.js'

const { theme } = useTheme()

const lantern = {
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName];
      Vue.component(component.name, component);
    }

    Vue.provide('theme', theme)
  },
};

export { lantern };