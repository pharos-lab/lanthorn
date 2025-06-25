const pharos = {
    colors: {
        default: {
            background: 'bg-slate-100',
            foreground: 'text-slate-700',
            hover: 'hover:bg-slate-200',
            border: 'border border-slate-500',
            focus: 'focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-1',
            outline: 'bg-white text-slate-500 hover:text-white hover:bg-slate-500 border border-slate-500',
            dark: 'ok'
        },
        danger: {
            background: 'bg-red-100',
            foreground: 'text-red-700',
            hover: 'hover:bg-red-200',
            border: 'border border-red-500',
            focus: 'focus:ring-2 focus:ring-red-500/50 focus:ring-offset-1',
            other: 'some class',
            other2: 'some otherclass'
        },
        primary: {
            background: 'bg-sky-100',
            foreground: 'text-sky-700',
            hover: 'hover:bg-sky-200',
            border: 'border border-sky-500',
            focus: 'focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-1',
        }
    },
    components: {
        button: {
            class: 'px-3 py-2 rounded-lg font-semibold',
            props: ['hover', 'focus', 'other']
        }
    }
}

export { pharos }