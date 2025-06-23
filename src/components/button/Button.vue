<template>
    <a 
        v-if="props.href"
        :href="props.href" 
        class="l-button"
        :class="pharos?.getClass('button', props.color, props.class)"
        
    >
        <slot></slot>
    </a>

    <button
        v-else
        type="button"
        :class="pharos?.getClass('button', props.color, props.class)"
        class="l-button">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { inject, type HTMLAttributes } from 'vue'
import { type Pharos } from '../../types';

const props = defineProps<{
    href?: string,
    class?: HTMLAttributes['class'],
    color?: string
}>()

const pharos = inject<Pharos>('pharos')
</script>