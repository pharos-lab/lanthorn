export type Theme = {
  components: {
    [key: string]: {
      class?: string
    }
  }
}

export type Pharos = {
  theme: Theme
  getClass: (component: string, overrideClass?: string) => string
}