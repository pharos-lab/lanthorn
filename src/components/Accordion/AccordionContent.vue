<template>
    <CollapsibleContent 
        :class="pharosClass('AccordionContent', props.class)"
        v-bind="visibleAttrs"
    >
        <slot></slot>
    </CollapsibleContent>
</template>

<script setup lang="ts">
import { CollapsibleContent } from '../collapsible';

import { usePharosComponent } from '../../composables/usePharosComponent';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'],
    [key: string]: unknown
}>()

const { visibleAttrs, pharosClass } = usePharosComponent()
</script>