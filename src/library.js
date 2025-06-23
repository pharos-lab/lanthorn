import * as components from './components/index.ts';

import { pharos } from './themes/pharos.ts';

const lantern = {
    install(app, options) {
      // components
      for (const componentName in components) {
        const component = components[componentName];
        app.component(componentName, component);
      }

      app.provide('pharos', pharos)
    }
};

export { lantern };