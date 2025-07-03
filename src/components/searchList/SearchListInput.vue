<template>
    <input 
        v-model="searchList?.model.value"
        type="text" 
        class="l-search-list-input" 
        :class="pharosClass('Collapsible', props.class)"
        v-bind="visibleAttrs"
    >
</template>

<script setup lang="ts">
import { inject, type HTMLAttributes, type Ref } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent'

const props = defineProps<{
    class?: HTMLAttributes['class'],
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