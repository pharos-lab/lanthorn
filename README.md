Here’s a clean and complete documentation for your plugin in **English**, using **Markdown** format:

---

````markdown
# Pharos Theme Plugin

A lightweight and flexible theme system for Vue components using Tailwind CSS.  
Pharos lets you define your design tokens in a central config and apply them consistently across your component library.

## ✨ Features

- Apply consistent classes across your components
- Centralized color, radius, padding, shadow, and size tokens
- Built-in Tailwind `twMerge` support
- Supports dynamic props (e.g., `variant`, `color`, `rounded`, `shadow`, etc.)
- Automatically removes style-related props from HTML

---

## 📦 Installation

```bash
npm install @pharos/plugin
````

---

## 🚀 Setup

```ts
// main.ts or main.js
import { createApp } from 'vue'
import App from './App.vue'
import { pharosPlugin } from '@pharos/plugin'
import theme from './theme'

createApp(App)
  .use(pharosPlugin, {
    theme,
    defaultColor: 'default',
  })
  .mount('#app')
```

---

## 🧠 Theme Structure

```ts
const theme = {
  padding: 'p-4',
  radius: {
    none: 'rounded-none',
    medium: 'rounded-md',
    large: 'rounded-lg',
    full: 'rounded-full',
  },
  shadow: {
    true: 'shadow-md',
    false: '',
  },
  colors: {
    default: {
      base: {
        background: 'bg-white',
        foreground: 'text-black',
      },
      variants: {
        solid: 'bg-black text-white',
        outline: 'border border-black text-black',
        light: 'bg-gray-100 text-black',
      },
    },
    red: {
      base: {
        background: 'bg-red-100',
        foreground: 'text-red-900',
      },
      variants: {
        solid: 'bg-red-500 text-white',
        outline: 'border border-red-500 text-red-500',
        light: 'bg-red-100 text-red-700',
      },
    },
  },
  props: {
    rounded: {
      none: 'rounded-none',
      medium: 'rounded-md',
      large: 'rounded-lg',
      full: 'rounded-full',
    },
    shadow: {
      true: 'shadow-md',
      false: '',
    },
  },
  components: {
    button: {
      class: 'inline-flex items-center justify-center font-medium',
      apply: ['variant', 'background', 'foreground'],
    },
    alert: {
      class: 'relative w-full text-sm',
      apply: ['variant', 'background', 'foreground'],
    },
  },
}
```

---

## 🧩 Usage in Components

### 1. Inject `pharos` and use helper

```ts
const pharos = inject('pharos')
const { attrs, visibleAttrs } = useStyleAttrs(pharos)

const className = pharos?.getClass('button', attrs, overrideClass)
```

### 2. Apply in template

```vue
<button
  :class="pharos?.getClass('button', attrs, props.class)"
  v-bind="visibleAttrs"
>
  Button
</button>
```

---

## 📘 API

### `pharos.getClass(component: string, props: any, override?: string): string`

Returns a merged Tailwind class string for the given component based on:

* global `theme.components[component].class`
* prop-based classes from `theme.props`
* color/variant classes from `theme.colors`
* optional `override` class that is merged last

---

### `useStyleAttrs(pharos)`

Returns:

* `attrs`: All dynamic attributes
* `visibleAttrs`: Props safe to pass to HTML (style-related props are excluded like `color`, `variant`, etc.)

---

## 📌 Example Button

```vue
<script setup lang="ts">
import { inject } from 'vue'
import { useStyleAttrs } from '@pharos/plugin'
const pharos = inject('pharos')
const { attrs, visibleAttrs } = useStyleAttrs(pharos)
</script>

<template>
  <button 
    :class="pharos?.getClass('button', attrs)" 
    v-bind="visibleAttrs"
  >
    <slot />
  </button>
</template>
```

---

## ✅ Tips

* Use `inheritAttrs: false` in your components to avoid leaking theme props into HTML
* You can add your own `apply` keys per component to control which color tokens apply
* Props like `size`, `rounded`, or `shadow` should be declared in `theme.props`

---

## 📄 License

MIT

```

---

Let me know if you'd like it exported as a file or split by sections for a multi-page documentation!
```