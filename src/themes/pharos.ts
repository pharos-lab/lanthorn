const pharos = {
    colors: {
        'default': {
            background: 'bg-slate-100',
            foreground: 'text-slate-700',
            hover: 'hover:bg-slate-200',
            border: 'border border-slate-500'
        },
        'danger': {
            background: 'bg-red-100',
            foreground: 'text-red-700',
            hover: 'hover:bg-red-200',
            border: 'border border-red-500',
            focus: 'focus:ring-2 focus:ring-red-500/50 focus:ring-offset-1',
            variants: {
                outline: {
                    background: 'bg-white',
                    foreground: 'text-red-500',
                    hover: 'hover:bg-red-500 hover:text-white',
                    border: 'border border-red-500',
                }
            }
        },
    },
    components: {
        button: {
            class: 'px-3 py-2 rounded-lg font-semibold  ',
            hover: true,
            focus: false
        }
    }
}

export { pharos }