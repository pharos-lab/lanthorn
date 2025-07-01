<template>
    <div 
        class="l-collapsible overflow-hidden"  
        :class="pharosClass('Collapsible', props.class)"
        :data-expanded="isOpen"
        v-bind="visibleAttrs"
    >
        <slot></slot> 
    </div>
</template>
  
<script setup lang="ts">
import { provide, type HTMLAttributes } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent';
import { useOpenable } from '../../composables/useOpenable'


const props = defineProps<{
    class?: HTMLAttributes['class'],
    open?: Boolean,
    [key: string]: unknown
}>()

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

provide('collapsible', {
    isOpen,
    toggle,
})
</script>
  