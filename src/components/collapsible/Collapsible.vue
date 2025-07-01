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

const isOpen = ref(props.open)

const emit = defineEmits<{
  open: []
  close: []
  toggle: [isOpen: Boolean]
}>()

defineOptions({
  inheritAttrs: false
})

const toggle = () => {
    isOpen.value ? emit('close') : emit('open')
    isOpen.value = !isOpen.value
    emit('toggle', isOpen.value)
}

function open() {
    isOpen.value = true
    emit('open')
}

function close() {
    isOpen.value = false
    emit('close')
}

defineExpose({
  open,
  close,
  toggle,
  isOpen
})

const { visibleAttrs, pharosClass } = usePharosComponent()

provide('collapsible', {
    isOpen,
    toggle,
})
</script>
  