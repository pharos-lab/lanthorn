<template>
    <div 
        class="l-dialog inline-block" 
        :data-open="isOpen" 
        :class="pharosClass('Dialog', props.class)"
        v-bind="visibleAttrs"
    >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, onMounted, onUnmounted } from 'vue'
import { type HTMLAttributes } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent'
import { useOpenable } from '../../composables/useOpenable';

const props = defineProps<{
    class?: HTMLAttributes['class'],
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
    isOpen,
    toggle
})

provide('dialog', { open, close, isOpen, toggle })

const handleKeyDown = (e:any) => {
  if (e.key === 'Escape') {
    close()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
/* Ajouter des styles pour la modale */
</style>