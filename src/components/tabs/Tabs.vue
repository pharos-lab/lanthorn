<template>
  <div
    class="l-tabs flex"
    :class="[orientationClass, pharosClass('Tabs', props.class)]"
    :data-orientation="props.orientation"
    v-bind="visibleAttrs"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, provide } from 'vue'
import type { HTMLAttributes } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent'

const props = defineProps<{
  class?: HTMLAttributes['class']
  orientation?: 'horizontal' | 'vertical'
  defaultValue?: string
}>()

defineOptions({
  inheritAttrs: false,
})

const { visibleAttrs, pharosClass } = usePharosComponent()
const active = ref(props.defaultValue ?? '0')

defineExpose({ active })

provide('tabs', {
  active,
  orientation: props.orientation ?? 'horizontal',
})


const orientationClass = computed(() => {
  return props.orientation === 'horizontal' ? 'flex-row' : 'flex-col'
})
</script>
