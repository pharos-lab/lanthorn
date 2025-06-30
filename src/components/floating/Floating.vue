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
import { ref, provide,type HTMLAttributes } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent';

const props = withDefaults(defineProps<{
    class?: HTMLAttributes['class'],
    trigger?: string,
    placement?: string,
    delay?: number,
    [key: string]: unknown
}>(), {trigger: () => 'click', placement: () => 'bottom', delay: () => 0})

defineOptions({
  inheritAttrs: false
})

const isOpen = ref(false)

const toggle = () => isOpen.value = !isOpen.value
const close = () => isOpen.value = false
const open = () => isOpen.value = true

provide('floating', { isOpen, toggle, close, open, props })

const { visibleAttrs, pharosClass } = usePharosComponent()
</script>

<style scoped>

</style>