<template>
    <ul 
        class="l-search-list-items overflow-hidden"
        :class="pharosClass('SearchListItems', props.class)"
        v-bind="visibleAttrs"
        v-show="props.value.includes(searchList?.model.value)"
    >
        <slot></slot>
    </ul>
</template>

<script setup lang="ts">
import { inject, type HTMLAttributes, type Ref } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent'

const props = defineProps<{
    class?: HTMLAttributes['class'],
    value: string,
    [key: string]: unknown
}>()

defineOptions({
    inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()

const searchList = inject<{
    model: Ref
}>('searchList')

</script>

<style scoped>

</style>