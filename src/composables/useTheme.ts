import { type Theme } from "../types"
import { twMerge } from 'tailwind-merge'

const staticProperties = ['background', 'foreground']

export function useTheme(theme:Theme) {

    function getClass(component:string, color: string = 'default', overrideClass: string = '') {
        
        const colorConfig = theme.colors?.[color] || {}
        const componentConfig = theme.components?.[component] || {}

        const colorClasses = Object.entries(colorConfig).flatMap(([key, value]) => {
            if (staticProperties.includes(key)) return value
        
            return componentConfig[key as keyof typeof componentConfig] ? value : ''
        })
        return twMerge(colorClasses, componentConfig.class || '', overrideClass)
    }    

    return { theme, getClass }
}