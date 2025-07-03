<template>
    <div 
        class="l-search-list" 
        :class="pharosClass('Collapsible', props.class)"
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

const emits = defineEmits()

defineOptions({
    inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()
const model = defineModel()

provide('searchList', {
    model,
})
</script>

<style scoped>

</style>