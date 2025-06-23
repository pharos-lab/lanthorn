import { type Theme } from "../types"
import { twMerge } from 'tailwind-merge'

export function useTheme(theme:Theme) {
    function getClass(component:string, overrideClass = '') {
        const colorConfig = theme.colors.default
        const componentConfig = theme.components?.[component] || {}

        const colorClasses = Object.entries(colorConfig).flatMap(([key, value]) => {
            if (key === 'background' || key === 'foreground') return value
        
            return componentConfig[key as keyof typeof componentConfig] ? value : ''
        })
        return twMerge(colorClasses, componentConfig.class || '', overrideClass)
    }    

    return { theme, getClass }
}