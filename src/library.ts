import type { App } from 'vue'
import * as components from './components/index.ts';
import { useTheme } from './composables/useTheme';
import type { PluginOptions } from './types/index.ts';

const lantern = {
    install(app: App, options?: PluginOptions) {
      // components
      for (const [componentName, component] of Object.entries(components)) {
        app.component(componentName, component);
      }

      app.provide('pharos', useTheme(options))
    }
};

export { lantern };