import type { HtmlHTMLAttributes } from "vue"

export type Theme = {
  colors: Record<string, string>,
  props: Record<string, {[key:string]: string}>,
  components: Record<string, {
    class?: string
    apply?: string[]
    props?: Record<string, unknown>
  }>
}

export type Pharos = {
  theme: Theme
  getClass: (component: string, props:any, override?: string) => string
}

export type PluginOptions = {
  theme: Theme,
  defaultColor?: string,
  components?: string[]
}

export interface BaseProps {
    class?: HtmlHTMLAttributes['class'];
    [key: string]: unknown;
}

export type OpenableEmits = {
  open?: [state?: unknown],
  close?: [],
  toggle?: [state: unknown]
}

