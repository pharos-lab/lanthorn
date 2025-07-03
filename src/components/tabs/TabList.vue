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
import { usePharosComponent } from '../../composables/usePharosComponent'
import type { BaseProps } from '../../types';

const props = defineProps<BaseProps>()

defineOptions({
  inheritAttrs: false,
})

const { visibleAttrs, pharosClass } = usePharosComponent()
</script>
