<template>
    <Floating 
        trigger="click" 
        class="l-dropdown" 
        :class="pharosClass('Dropdown', props.class)"
        v-bind="visibleAttrs"
    >
      <slot></slot>
    </Floating>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { Floating } from '../floating'
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
  