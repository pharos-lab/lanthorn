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
import { provide, type HTMLAttributes } from 'vue'
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

<style scoped>

</style>