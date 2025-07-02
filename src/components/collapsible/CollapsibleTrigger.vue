<template>
    <div 
        class="l-collapsible-trigger"  
        :class="pharosClass('CollapsibleTrigger', props.class)"
        @click="collapsible?.toggle"
        :data-expanded="collapsible?.isOpen.value"
        v-bind="visibleAttrs"
    >
        <slot>trigger</slot>
    </div>
</template>

<script setup lang="ts">
import { inject, type HTMLAttributes, type Ref } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent';

const props = defineProps<{
    class?: HTMLAttributes['class'],
    [key: string]: unknown
}>()

const { visibleAttrs, pharosClass } = usePharosComponent()

const collapsible = inject<{
  isOpen: Ref<boolean>,
  toggle: () => void
}>('collapsible')

</script>