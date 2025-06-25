import { type PluginOptions, type Theme } from "../types"
import { twMerge } from 'tailwind-merge'

const staticProperties = ['background', 'foreground']

export function useTheme(options: PluginOptions) {

    function getClass(component:string, props: any, override?: string) {
        const color = props.color || options.defaultColor || 'default'

        const colorConfig = options.theme.colors?.[color] || {}
        
        const componentConfig = options.theme.components?.[component] || {}
        
        const colorClasses = Object.entries(colorConfig).map(([key, value]) => {
            
            if (staticProperties.includes(key) || props[key] || props[key] == '') return value

            if (props[key] == false) {
                return ''
            }
            
            return componentConfig.props?.includes(key) ? value : ''
        }).filter(Boolean)
    
        return twMerge(componentConfig.class || '', colorClasses, override)
    }    

    return { theme: options.theme, getClass }
}