const pharos = {
    colors: {
        default: {
            base: {
                background: 'bg-slate-50',
                foreground: 'text-slate-700',
                hover: 'hover:bg-slate-100',
                border: 'border border-slate-500',
                focus: 'focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-1',
            },
            variants: {
                outline: 'bg-white text-slate-500 hover:text-white hover:bg-slate-500 border border-slate-500',
                dark: 'bg-slate-800'
            }
        },
        primary: {
            base: {
                background: 'bg-sky-50',
                foreground: 'text-sky-700',
                hover: 'hover:bg-sky-100',
                border: 'border border-sky-500',
                focus: 'focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-1',
            },
            variants: {
                outline: 'bg-white text-sky-500 hover:text-white hover:bg-sky-500 border border-sky-500',
                dark: 'bg-sky-800'
            }
        }
    },
    props: {
        size: {
            sm: 'text-sm px-1 py-px',
            md: 'text-sm px-1 py-px',
            lg: 'text-2xl px-3 py-2',
        },
        radius: {
            small: 'rounded-sm',
            large: 'rounded-lg',
            circle: 'rounded-full'
        }
    },
    components: {
        button: {
            class: 'px-3 py-2 rounded-lg font-semibold',
            apply: ['focus', 'hover', 'outline']
        }
    }
}

export { pharos }