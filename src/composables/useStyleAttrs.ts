import { useAttrs, computed } from 'vue'
import type { Pharos } from '../types'

export function useStyleAttrs(pharos: Pharos | undefined) {
  const attrs = useAttrs()
  
  const themeKeys = computed(() => {
    if (!pharos) return []

    const color = attrs.color as string || 'default'
    const colorConfig = pharos.theme.colors?.[color] || {}

    return [
      'color',
      'variant',
      ...Object.keys(colorConfig.base),
    ]
  })

  const visibleAttrs = computed(() =>
    Object.fromEntries(
      Object.entries(attrs).filter(([key]) => !themeKeys.value.includes(key))
    )
  )

  return {
    /** Tout ce qui est passé dynamiquement (hover, focus, etc.) */
    attrs,

    /** Props HTML visibles à passer avec `v-bind` */
    visibleAttrs,
  }
}
