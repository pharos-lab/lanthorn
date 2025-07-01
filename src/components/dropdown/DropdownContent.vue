<template>
    <FloatingContent 
        class="l-dropdown-content"
        :class="pharosClass('DropdownContent', props.class)"
        v-bind="visibleAttrs" 
    >
      <slot></slot>
    </FloatingContent>
</template>

<script setup lang="ts">
import { FloatingContent } from '../floating'
import { usePharosComponent } from '../../composables/usePharosComponent';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'],
    [key: string]: unknown
}>()

defineOptions({
  inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()
</script>
  