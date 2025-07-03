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
import type { BaseProps, OpenableEmits } from '../../types';

interface FloatingProps extends BaseProps {
    trigger?: string,
	placement?: string,
	delay?: number,
}

const props = withDefaults(defineProps<FloatingProps>(), {
	trigger: () => 'click', 
	placement: () => 'bottom', 
	delay: () => 0}
)

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

provide('floating', { isOpen, toggle, close, open, props })

</script>

<style scoped>

</style>