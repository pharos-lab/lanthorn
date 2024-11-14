<template>
    <Teleport :to="props.teleport">
        <div class="l-modal-overlay fixed inset-0 flex justify-center items-start pt-56 bg-slate-400/50 z-50" @click.self="closeModal">
            <div class="l-modal w-1/3 p-8 rounded shadow" :class="classes">
                <slot></slot>
            </div>
        </div>
    </Teleport>
</template>

<script setup>

import { inject, computed } from 'vue'

const props = defineProps({
    teleport: {
        type: String,
        default: 'body'
    },
    color: {
        type: String,
        default: 'white'
    },
    variant: {
        type: String,
        default: 'base',
        validator(value) {
            return ['light', 'dark', 'base', 'outline', 'text'].includes(value)
        }
    },
})

const getClasses = inject('getClasses')

const classes = computed(() => {
    return getClasses(props, 'modal')
})
console.log(classes.value)

const emit = defineEmits(['close'])

const closeModal = () => {
    emit('close')
}

</script>