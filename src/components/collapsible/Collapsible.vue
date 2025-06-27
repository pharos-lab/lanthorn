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
import { provide, ref, type HTMLAttributes } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent';

const props = defineProps<{
    class?: HTMLAttributes['class'],
    open?: Boolean,
    [key: string]: unknown
}>()

defineOptions({
  inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()

const isOpen = ref(props.open)

const toggle = () => {
    isOpen.value = !isOpen.value
}

provide('collapsible', {
    isOpen,
    toggle,
})
</script>
  