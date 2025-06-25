<template>
    <a 
        v-if="props.href"
        :href="props.href" 
        class="l-button"
        :class="pharos?.getClass('button', attrs)"
        v-bind="visibleAttrs"
        
    >
        <slot></slot>
    </a>

    <button
        v-else
        type="button"
        :class="pharos?.getClass('button', attrs)"
        class="l-button"
        v-bind="visibleAttrs"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { type Pharos } from '../../types';
import { useStyleAttrs } from '../../composables/useStyleAttrs'

const pharos = inject<Pharos>('pharos')
const { attrs, visibleAttrs } = useStyleAttrs(pharos)

const props = defineProps<{
    href?: string,
    [key: string]: string | Boolean | undefined
}>()

defineOptions({
  inheritAttrs: false
})




</script>