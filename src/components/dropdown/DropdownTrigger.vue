<template>
    <FloatingTrigger 
        class="l-dropdown-trigger"
        :class="pharosClass('DropdownTrigger', props.class)"
        v-bind="visibleAttrs"    
    >
      <slot></slot>
    </FloatingTrigger>
</template>

<script setup lang="ts">
import { FloatingTrigger } from '../floating'
import { usePharosComponent } from '../../composables/usePharosComponent';
import type { BaseProps } from '../../types';

const props = defineProps<BaseProps>()

defineOptions({
  inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()
</script>
  