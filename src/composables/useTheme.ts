import { type Theme } from "../types"
import { twMerge } from 'tailwind-merge'

const staticProperties = ['background', 'foreground']

export function useTheme(theme:Theme) {

    function getClass(component:string, props: any, override?: string) {
        const color = props.color || 'default'

        const colorConfig = theme.colors?.[color] || {}
        
        const componentConfig = theme.components?.[component] || {}
        
        const colorClasses = Object.entries(colorConfig).map(([key, value]) => {
            
            if (staticProperties.includes(key) || props[key] || props[key] == '') return value

            if (props[key] == false) {
                return ''
            }
            
            return componentConfig.props?.includes(key) ? value : ''
        }).filter(Boolean)
    
        return twMerge(componentConfig.class || '', colorClasses, override)
    }    

    return { theme, getClass }
}