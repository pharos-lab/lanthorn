<template>
    <div 
        class="l-floating relative inline-block" 
        :class="pharosClass('Floating', props.class)" 
        :data-open="isOpen"
        v-bind="visibleAttrs"
    >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { provide, type HTMLAttributes } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent';
import { useOpenable } from '../../composables/useOpenable'

const props = withDefaults(defineProps<{
    class?: HTMLAttributes['class'],
    trigger?: string,
    placement?: string,
    delay?: number,
    [key: string]: unknown
}>(), {trigger: () => 'click', placement: () => 'bottom', delay: () => 0})

const emits = defineEmits<{
  open: []
  close: []
  toggle: [isOpen: Boolean]
}>()

defineOptions({
  inheritAttrs: false
})

const { isOpen, open, close, toggle } = useOpenable({emits})
const { visibleAttrs, pharosClass } = usePharosComponent()

defineExpose({
  open,
  close,
  toggle,
  isOpen
})

provide('floating', { isOpen, toggle, close, open, props })

</script>

<style scoped>

</style>