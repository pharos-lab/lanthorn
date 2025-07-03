<template>
    <ul 
        class="l-search-list-items overflow-hidden"
        :class="pharosClass('SearchListItems', props.class)"
        v-bind="visibleAttrs"
    >
        <slot></slot>
    </ul>
</template>

<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent'

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