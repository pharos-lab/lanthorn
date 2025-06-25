const pharos = {
    colors: {
        default: {
            base: {
                background: 'bg-slate-100',
                foreground: 'text-slate-700',
                hover: 'hover:bg-slate-200',
                border: 'border border-slate-500',
                focus: 'focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-1',
            },
            variants: {
                outline: 'bg-white text-slate-500 hover:text-white hover:bg-slate-500 border border-slate-500',
                dark: 'bg-slate-800'
            }
        }
    },
    components: {
        button: {
            class: 'px-3 py-2 rounded-lg font-semibold',
            props: ['hover']
        }
    }
}

export { pharos }