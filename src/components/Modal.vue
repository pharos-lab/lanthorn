<template>
    <Teleport :to="props.teleport">
        <div class="l-modal-overlay fixed inset-0 flex justify-center items-start pt-56 bg-slate-400/50 z-50" @click.self="closeModal">
            <div class="l-modal w-1/3 bg-white p-4">
                <slot></slot>
            </div>
        </div>
    </Teleport>
</template>

<script setup>

const props = defineProps({
    teleport: {
        type: String,
        default: 'body'
    },
})

const emit = defineEmits(['close'])

const closeModal = () => {
    emit('close')
}
</script>