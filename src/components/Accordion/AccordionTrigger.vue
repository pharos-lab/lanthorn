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
import type { BaseProps } from '../../types';

const props = defineProps<BaseProps>()

const { visibleAttrs, pharosClass } = usePharosComponent()

</script>

<style scoped>
</style>