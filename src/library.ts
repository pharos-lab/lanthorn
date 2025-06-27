import type { App } from 'vue'
import * as components from './components/index.ts';
import { useTheme } from './composables/useTheme';
import type { PluginOptions } from './types/index.ts';

const lantern = {
    install(app: App, options?: PluginOptions) {
      const entries  = Object.entries(components)
      const toRegister: [string, any][] = []

      if (options?.components) {
        options.components.forEach(componentName => {
          const component = entries.find(([entryName]) => entryName == componentName)
          
          if (!component) return console.warn(`[lantern] Components registration: "${componentName}" not found. \n Please check the 'components' property in you plugin's options`);

          toRegister.push(component)
        });
      } else {
        toRegister.push(...entries)
      }

      for (const [componentName, component] of toRegister) {
        app.component(componentName, component);
      }

      app.provide('pharos', useTheme(options))
    }
};

export { lantern };