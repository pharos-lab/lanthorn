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
import { provide } from 'vue';
import { usePharosComponent } from '../../composables/usePharosComponent';
import { useOpenable } from '../../composables/useOpenable'
import type { BaseProps, OpenableEmits } from '../../types';

interface CollapsibleProps extends BaseProps {
  open?: boolean
} 

const props = defineProps<CollapsibleProps>()

const emits = defineEmits<OpenableEmits>()

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
  