import { type PluginOptions } from "../types"
import { twMerge } from 'tailwind-merge'

const staticProperties = ['background', 'foreground']

export function useTheme(options?: PluginOptions) {

    function getClass(component:string, props: any, override?: string) {
        
        const colorClasses =  getColorClasses(component, props)
        const propsClasses = getPropsClasses(component, props)
        const componentClasses = options?.theme.components?.[component]?.class
        
        return twMerge(componentClasses, propsClasses, colorClasses, override)
    }

    function getColorClasses(component:string, props: any) {
        const color = props.color || options?.defaultColor || 'default'

        const colorConfig = options?.theme.colors?.[color]
        
        if (!colorConfig) {
            console.warn(`[theme warning] Color "${color}" is not defined in theme.`)
            return []
        }

        const componentConfig = options?.theme.components?.[component]

        // Warn if apply's value is not in color's config
        componentConfig?.apply?.forEach(apply => {
            if(!(Object.keys(colorConfig).includes(apply))) {
                console.warn( `[theme warning] "${apply}" is listed in componentConfig.apply but doesn't exist in color theme "${color}".`)
            }
        })
        
        const colorClasses = Object.entries(colorConfig).map(([key, value]) => {

            if (staticProperties.includes(key) || props[key] || props[key] === '') return value

            if (props[key] == false) {
                return ''
            }
            
            return componentConfig?.apply?.includes(key) ? value : ''
        }).filter(Boolean).join(' ')
        
        return colorClasses
    }

    function getPropsClasses(component: string, props: any) {
        const classes: string[] = []

        // Get the classes from theme's components 's prop
        Object.entries(options?.theme.components[component]?.props || {}).forEach(([key, value]) => {
            
            if (options?.theme.props?.[key] && options?.theme.props[key][value as string]) {
                classes.push(options?.theme.props[key][value as string])
            }
        })

        //get the classes from component's prop
        Object.entries(props).forEach(([key, value]) => {
            if (options?.theme.props?.[key] && options?.theme.props[key][value as string]) {
                classes.push(options?.theme.props[key][value as string])
            }
        })

        return classes
    }

    return { theme: options?.theme, getClass }
}