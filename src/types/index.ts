export type Theme = {
  colors: {
    [key: string]: {
      base: {
        [key: string]: string
      },
      variants: {
        [key: string]: string
      }
    }
  }
  components: {
    [key: string]: {
      class?: string,
      props?: string[]
    }
  }
}

export type Pharos = {
  theme: Theme
  getClass: (component: string, props:any, override?: string) => string
}

export type PluginOptions = {
  theme: Theme,
  defaultColor: string
}