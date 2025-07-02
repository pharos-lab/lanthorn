<template>
  <div
    class="l-tabs-list flex"
    :class="pharosClass('TabsList', props.class)"
    v-bind="visibleAttrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

defineOptions({
  inheritAttrs: false,
})

const { visibleAttrs, pharosClass } = usePharosComponent()
</script>
