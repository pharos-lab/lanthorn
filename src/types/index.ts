export type Theme = {
  colors: Record<string, ColorTheme>,
  props: Record<string, {[key:string]: string}>,
  components: Record<string, {
    class?: string
    apply?: string[]
  }>
}

export type ColorTheme = {
  base: Record<string, string>
  variants?: Record<string, string>
}

export type Pharos = {
  theme: Theme
  getClass: (component: string, props:any) => string
}

export type PluginOptions = {
  theme: Theme,
  defaultColor?: string
}