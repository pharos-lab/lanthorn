import type { App } from 'vue'
import * as components from './components/index.ts';
import { useTheme } from './composables/useTheme';
import type { PluginOptions } from './types/index.ts';

const lantern = {
    install(app: App, options?: PluginOptions) {
  
      const entries = Object.entries(components)

      const toRegister = options?.components
        ? entries.filter(([name]) => options.components?.includes(name))
        : entries

      for (const [name, component] of toRegister) {
        app.component(name, component)
      }

      app.provide('pharos', useTheme(options))
    }
};

export { lantern };