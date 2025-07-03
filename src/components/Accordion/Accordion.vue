<template>
    <div 
        class="l-accordion overflow-hidden"
        :class="pharosClass('Accordion', props.class)"
        v-bind="visibleAttrs"
    >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { usePharosComponent } from '../../composables/usePharosComponent';
import type { BaseProps } from '../../types';

const props = defineProps<BaseProps>()

defineOptions({
  inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()

</script>

<style scoped>

</style>