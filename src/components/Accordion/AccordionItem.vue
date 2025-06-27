<template>
    <Collapsible
        class="l-accordion-item" 
        :class="pharosClass('AccordionItem', props.class)"
        v-bind="visibleAttrs"
    >
        <slot></slot>
    </Collapsible>
</template>
  
<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { Collapsible }  from '../collapsible';
import { usePharosComponent } from '../../composables/usePharosComponent';

const props = defineProps<{
    class?: HTMLAttributes['class'],
    [key: string]: unknown
}>()

defineOptions({
  inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()
</script>
  