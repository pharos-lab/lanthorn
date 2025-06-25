const pharos = {
    colors: {
        'default': {
            background: 'bg-slate-100',
            foreground: 'text-slate-700',
            hover: 'hover:bg-slate-200',
            border: 'border border-slate-500',
            focus: 'focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-1',
        },
        'danger': {
            background: 'bg-red-100',
            foreground: 'text-red-700',
            hover: 'hover:bg-red-200',
            border: 'border border-red-500',
            focus: 'focus:ring-2 focus:ring-red-500/50 focus:ring-offset-1',
            other: 'some class',
            other2: 'some otherclass'
        },
    },
    components: {
        button: {
            class: 'px-3 py-2 rounded-lg font-semibold',
            props: ['hover', 'focus']
        }
    }
}

export { pharos }