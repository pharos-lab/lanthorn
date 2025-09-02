const pharos = {
    colors: {
        default: {  
            background: 'bg-slate-50',
            foreground: 'text-slate-700',
            hover: 'hover:bg-slate-100',
            border: 'border border-slate-500',
            focus: 'focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-1',
            outline: 'border border-slate-500 border-2'
        },
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
        },
        shadow: {
            base: 'shadow'
        }
    },
    components: {
        Button: {
            class: 'px-3 py-2 rounded-lg font-semibold',
            apply: ['focus', 'hover', 'outline', 'wrong'],
            props: {
                size: 'md',
                shadow: 'base'
            }
        },
        Alert: {
            class: 'p-4 rounded'
        },
        Collapsible: {
            class: 'rounded-lg'
        },
        CollapsibleTrigger: {
            class: 'p-4'
        },
        CollapsibleContent: {
            class: 'p-4'
        },
        FloatingTrigger: {
            class: 'rounded-lg p-4'
        }
    }
}

export { pharos }