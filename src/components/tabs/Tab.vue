<template>
  <div
    v-if="isActive"
    class="l-tab"
    :class="pharosClass('Tab', props.class)"
    v-bind="visibleAttrs"
    :data-active="isActive"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import type { HTMLAttributes, Ref } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent'

const props = defineProps<{
  value: string
  class?: HTMLAttributes['class']
}>()

defineOptions({
  inheritAttrs: false,
})

const { visibleAttrs, pharosClass } = usePharosComponent()

const tabs = inject('tabs') as {
  active: Ref<string>
}

const isActive = computed(() => tabs.active.value === props.value)
</script>
