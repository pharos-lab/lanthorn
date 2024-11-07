<template>
<button class="py-2 px-3 font-semibold" :class="backgroundClass" >
    <slot></slot>
</button>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme.js'

const { theme } = useTheme()

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