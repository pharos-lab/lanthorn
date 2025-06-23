<template>
    <a 
        v-if="props.href"
        :href="props.href" 
        class="l-button" 
        
    >
        <slot></slot>
    </a>

    <button
        v-else
        type="button"
        
        class="l-button">
        <slot></slot>
    </button>
</template>

<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
    href: String,
})

const pharos = inject('pharos')

console.log(pharos);
</script>