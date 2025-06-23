export type Theme = {
  colors: {
    [key: string]: {
      background: string,
      foreground: string,
      hover: string,
      focus: string,
      active: string
    }
  }
  components: {
    [key: string]: {
      class?: string,
      hover?: Boolean,
    }
  }
}

export type Pharos = {
  theme: Theme
  getClass: (component: string, color?: string, overrideClass?: string) => string
}