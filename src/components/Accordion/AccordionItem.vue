<template>
    <Collapsible
        class="l-accordion-item" 
        :class="pharosClass('AccordionItem', props.class)"
        v-bind="visibleAttrs"
        ref="collapsibleRef"
    >
        <slot></slot>
    </Collapsible>
</template>
  
<script setup lang="ts">
import { Collapsible }  from '../collapsible';
import { useTemplateRef, type HTMLAttributes } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent';

const props = defineProps<{
    class?: HTMLAttributes['class'],
    [key: string]: unknown
}>()

defineOptions({
  inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()

const collapsibleRef = useTemplateRef('collapsibleRef')

defineExpose({
  open: () => collapsibleRef.value?.open(),
  close: () => collapsibleRef.value?.close(),
  toggle: () => collapsibleRef.value?.toggle(),
  isOpen: collapsibleRef.value?.isOpen,
})
</script>
  