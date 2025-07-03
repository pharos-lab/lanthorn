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
import { usePharosComponent } from '../../composables/usePharosComponent'
import type { BaseProps } from '../../types';

const props = defineProps<BaseProps>()

defineOptions({
    inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()
</script>

<style scoped>

</style>