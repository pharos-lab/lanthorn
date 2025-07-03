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
import type { BaseProps } from '../../types';

const props = defineProps<BaseProps>()

defineOptions({
  inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()
</script>
  