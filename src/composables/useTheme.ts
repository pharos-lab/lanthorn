import { type PluginOptions } from "../types"
import { twMerge } from 'tailwind-merge'

const staticProperties = ['background', 'foreground']

export function useTheme(options: PluginOptions) {

    function getClass(component:string, props: any, override?: string) {
        const color = props.color || options.defaultColor || 'default'

        const colorConfig = options.theme.colors?.[color] || {}
        
        const componentConfig = options.theme.components?.[component] || {}
        
        const colorClasses = Object.entries({...colorConfig.base, ...colorConfig.variants}).map(([key, value]) => {

            if (staticProperties.includes(key) || props[key] || props[key] === '' || props.variant == key) return value

            if (props[key] == false) {
                return ''
            }
            
            return componentConfig.props?.includes(key) ? value : ''
        }).filter(Boolean)
    
        return twMerge(componentConfig.class || '', colorClasses, override)
    }    

    return { theme: options.theme, getClass }
}