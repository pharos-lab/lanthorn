// composables/usePharosComponent.ts
import { inject } from 'vue'
import { useStyleAttrs } from './useStyleAttrs'
import type { Pharos } from '../types'

export function usePharosComponent() {
  const pharos = inject<Pharos>('pharos')
  const { attrs, visibleAttrs } = useStyleAttrs(pharos)

  const pharosClass = (component: string, userClass?: string) =>
    pharos?.getClass(component, attrs, userClass)

  return {
    pharos,
    attrs,
    visibleAttrs,
    pharosClass
  }
}