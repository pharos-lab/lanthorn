import * as components from './components';
import { useTheme } from '@/composables/useTheme.js'

const { theme, getClasses, getClass, getClassObject } = useTheme()

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
    Vue.provide('getClassObject', getClassObject)
  },
};

export { lantern };