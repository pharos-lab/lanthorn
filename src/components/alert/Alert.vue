<template>
  <Transition>
    <div
      v-show="isOpen"
      class="l-alert"
      :class="pharos?.getClass('alert', attrs, props.class)"
      v-bind="visibleAttrs"
    >
      <X
        v-if="attrs.dismissible !== false"
        class="float-right cursor-pointer rounded"
        @click="isOpen = false"
      />
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, type HTMLAttributes } from 'vue'
import { X } from 'lucide-vue-next'
import { usePharosComponent } from '../../composables/usePharosComponent'

const props = defineProps<{ 
    class?: HTMLAttributes['class']
    [key: string]: string | Boolean | undefined
}>()
const isOpen = ref(true)

defineOptions({
  inheritAttrs: false
})

const { pharos, attrs, visibleAttrs } = usePharosComponent()
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
