<template>
  <div
    class="l-tabs-trigger"
    :class="[pharosClass('TabsTrigger', props.class)]"
    :data-active="isActive"
    v-bind="visibleAttrs"
    @click="tabs.open(props.value)"
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
    active: Ref<string>,
    open: (value:string) => void
}

const isActive = computed(() => tabs.active.value === props.value)
</script>
