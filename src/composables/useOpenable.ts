import { ref } from 'vue'

export function useOpenable(options?: {
  initialState?: boolean,
  emits?: ((evt: "open") => void) & ((evt: "close") => void) & ((evt: "toggle", isOpen: Boolean) => void),
}) {
    const isOpen = ref(options?.initialState || false)


    function open() {
        isOpen.value = true
        options?.emits?.('open')
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
    }
}
