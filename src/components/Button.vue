<template>
<button class="" :class="backgroundClass">
    <slot></slot>
</button>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme.js'

const { theme } = useTheme()

const props = defineProps({
    variant: {
        type: String,
        default: 'primary'
    }
})

const backgroundClass = computed(() => {
    return theme.colors.background[props.variant]
})
</script>