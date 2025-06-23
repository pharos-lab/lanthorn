import type { App } from 'vue'

import * as components from './components/index.ts';

import { pharos } from './themes/pharos.ts';

const lantern = {
    install(app: App, options = {}) {
      // components
      for (const [componentName, component] of Object.entries(components)) {
        app.component(componentName, component);
      }

      app.provide('pharos', pharos)
    }
};

export { lantern };