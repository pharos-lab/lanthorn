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
import { inject, type Ref } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent';
import type { BaseProps } from '../../types';

const props = defineProps<BaseProps>()

const { visibleAttrs, pharosClass } = usePharosComponent()

const collapsible = inject<{
  isOpen: Ref<boolean>,
  toggle: () => void
}>('collapsible')

</script>