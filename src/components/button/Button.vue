<template>
    <a 
        v-if="props.href"
        :href="props.href" 
        class="l-button"
        :class="pharos?.getClass('button', attrs, props.class)"
        v-bind="visibleAttrs"
        
    >
        <slot></slot>
    </a>

    <button
        v-else
        type="button"
        :class="pharos?.getClass('button', attrs, props.class)"
        class="l-button"
        v-bind="visibleAttrs"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { usePharosComponent } from '../../composables/usePharosComponent'

const props = defineProps<{
    href?: string,
    class?: HTMLAttributes['class']
    [key: string]: string | Boolean | undefined
}>()

defineOptions({
  inheritAttrs: false
})

const { pharos, attrs, visibleAttrs } = usePharosComponent()
</script>