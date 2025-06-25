import { type Theme } from "../types"
import { twMerge } from 'tailwind-merge'

const staticProperties = ['background', 'foreground']

export function useTheme(theme:Theme) {

    function getClass(component:string, props: any, override?: string) {
        
        const colorConfig = theme.colors?.[props.color || 'default'] || {}
        
        const componentConfig = theme.components?.[component] || {}

        const colorClasses = Object.entries(colorConfig).flatMap(([key, value]) => {
            
            if (staticProperties.includes(key) || props[key]) return value

            if (!props[key]) {
                return
            }
            
            return componentConfig[key as keyof typeof componentConfig] ? value : ''
        })
        
        return twMerge(componentConfig.class || '', colorClasses, override)
    }    

    return { theme, getClass }
}