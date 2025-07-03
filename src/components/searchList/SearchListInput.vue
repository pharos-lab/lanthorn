<template>
    <input 
        v-model="value"
        type="text" 
        class="l-search-list-input" 
        :class="pharosClass('SearchListInput', props.class)"
        v-bind="visibleAttrs"
    >
</template>

<script setup lang="ts">
import { computed, inject, type HTMLAttributes, type Ref } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent'
import type { BaseProps } from '../../types';

const props = defineProps<BaseProps>()

defineOptions({
    inheritAttrs: false
})

const { visibleAttrs, pharosClass } = usePharosComponent()

const value = computed({
  get: () => searchList?.model.value,
  set: (val) => {
    if (searchList) searchList.model.value = val
  }
})
const searchList = inject<{
    model: Ref
}>('searchList')
</script>