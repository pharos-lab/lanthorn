<template>
    <li
        class="l-search-list-item"
        :class="pharosClass('SearchListItem', props.class)"
        v-bind="visibleAttrs"    
        v-show="shouldDisplayItem"
    >
        <slot></slot>
    </li>
</template>

<script setup lang="ts">
import { computed, inject, type Ref,  } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent'
import type { BaseProps } from '../../types';

interface SearchListItemProps extends BaseProps {
    value: string
}
const props = defineProps<SearchListItemProps>()

defineOptions({
    inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()

const searchList = inject<{
    model: Ref
}>('searchList')

const shouldDisplayItem = computed(() => {
    const searchTerm = searchList?.model.value?.toLowerCase() || ''
    return props.value.toLowerCase().includes(searchTerm) || !searchTerm
})
</script>