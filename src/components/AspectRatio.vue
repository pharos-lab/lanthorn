<template>
    <div class="l-aspect-ratio">
        <slot></slot>
    </div>
</template>

<script setup>
    const props = defineProps({
        ratio: String,
        validator(value) {
            return value.match(/\d\/\d/);
        },
    });


</script>

<style scoped>
.l-aspect-ratio {
    aspect-ratio: v-bind(props.ratio);
}
</style>