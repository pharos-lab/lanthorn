<template>
    <li
        class="l-search-list-item"
        :class="pharosClass('SearchListItem', props.class)"
        v-bind="visibleAttrs"    
        v-show="props.value.includes(searchList?.model.value) || !searchList?.model.value"
    >
        <slot></slot>
    </li>
</template>

<script setup lang="ts">
import { inject, type HTMLAttributes, type Ref,  } from 'vue'
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