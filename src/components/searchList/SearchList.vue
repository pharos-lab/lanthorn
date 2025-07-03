<template>
    <div 
        class="l-search-list" 
        :class="pharosClass('SearchList', props.class)"
        v-bind="visibleAttrs"
    >
        <slot></slot>    
    </div>
</template>

<script setup lang="ts">
import { provide, ref, type HTMLAttributes } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent';
import type { BaseProps } from '../../types';

const props = defineProps<BaseProps>()

const emits = defineEmits()

defineOptions({
    inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()
const model = ref()

provide('searchList', {
    model,
})
</script>

<style scoped>

</style>