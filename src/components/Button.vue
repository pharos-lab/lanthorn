<template>
<button class="py-2 px-3 font-semibold" :class="backgroundClass" >
    <slot></slot>
</button>
</template>

<script setup>
import { computed, inject } from 'vue'

const theme = inject('theme')

const props = defineProps({
    color: {
        type: String,
        default: 'secondary'
    },
    variant: {
        type: String,
        default: 'base'
    }
})

const backgroundClass = computed(() => {
    if (props.variant == 'outline') {
        return theme.colors.text[props.color]
    }
    return theme.colors.background[props.color][props.variant] || ''
})
</script>