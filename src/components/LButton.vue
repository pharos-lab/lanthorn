<template>

</template>

<script setup>

const props = defineProps({
    color: {
        type: String,
        default: 'blue',
        validator(value) {
        // The value must match one of these strings
        return ['gray', 'red', 'orange', 'yellow', 'blue', 'primary', 'secondary'].includes(value);
        },
    },
    mode: {
        type: String,
        default: 'fill',
        validator(value) {
        // The value must match one of these strings
        return ['none', 'fill', 'light', 'outlined'].includes(value);
        },
    },
    rounded: {
        type: String,
        validator(value) {
        // The value must match one of these strings
        return ['none', 'sm', 'normal', 'md', 'lg', 'xl', 'pill'].includes(value);
        },
    },
    hover: {
        type: Boolean,
        default: true,
    },
    focus: String,
})
</script>