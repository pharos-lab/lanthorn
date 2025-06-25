export type Theme = {
  colors: {
    [key: string]: {
      background: string,
      foreground: string,
      hover?: string,
      focus?: string,
      active?: string
    }
  }
  components: {
    [key: string]: {
      class?: string,
      hover?: Boolean,
      border?: Boolean
    }
  }
}

export type Pharos = {
  theme: Theme
  getClass: (component: string, props:any, override?: string) => string
}