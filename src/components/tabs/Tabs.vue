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
import type { HTMLAttributes, Ref } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent'
import { useOpenable } from '../../composables/useOpenable';
import type { OpenableEmits } from '../../types';

const props = defineProps<{
  class?: HTMLAttributes['class']
  orientation?: 'horizontal' | 'vertical'
  defaultValue?: string
}>()

const emits = defineEmits<OpenableEmits>()

defineOptions({
  inheritAttrs: false,
})

const { visibleAttrs, pharosClass } = usePharosComponent()

const { open, active } = useOpenable({emits, defaultValue: props.defaultValue})

defineExpose({ active, open })

provide('tabs', {
  active,
  open,
  orientation: props.orientation ?? 'horizontal',
})


const orientationClass = computed(() => {
  return props.orientation === 'horizontal' ? 'flex-row' : 'flex-col'
})
</script>
