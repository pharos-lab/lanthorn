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
import type { BaseProps } from '../../types';

const props = defineProps<BaseProps>()

const { visibleAttrs, pharosClass } = usePharosComponent()
</script>