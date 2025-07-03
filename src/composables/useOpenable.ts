import { ref } from 'vue'
import type { OpenableEmits } from '../types'


export function useOpenable(options?: {
    initilaState?: boolean
    defaultValue?: string
    emits?: (evt: keyof OpenableEmits, state?: unknown)  => void,
}) {
    const isOpen = ref(options?.initilaState || false)
    const active = ref(options?.defaultValue)

    function open(value?: string) {
        if (typeof value === 'string') {
            active.value = value
        } else {
            isOpen.value = true
        }
        options?.emits?.('open', active.value)
    }

    function close() {
        isOpen.value = false
        options?.emits?.('close')
    }

    function toggle() {
        isOpen.value ? close() : open()
        options?.emits?.('toggle', isOpen.value)
    }

    return {
        isOpen,
        open,
        close,
        toggle, 
        active
    }
}
