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
import { useTemplateRef } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent';
import type { BaseProps } from '../../types';

const props = defineProps<BaseProps>()

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
  