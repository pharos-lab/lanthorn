<template>
    <CollapsibleTrigger
        :class="pharosClass('AccordionTrigger', props.class)"
        v-bind="visibleAttrs"
    >
        <slot></slot>
    </CollapsibleTrigger>
</template>

<script setup lang="ts">
import { CollapsibleTrigger } from '../collapsible';
import { usePharosComponent } from '../../composables/usePharosComponent';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

const { visibleAttrs, pharosClass } = usePharosComponent()

</script>

<style scoped>
</style>