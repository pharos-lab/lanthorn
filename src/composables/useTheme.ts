import { type Theme } from "../types"
import { twMerge } from 'tailwind-merge'

export function useTheme(theme:Theme) {
    function getClass(component:string, overrideClass = '') {
        return twMerge(theme.components?.[component]?.class || '', overrideClass)
    }    

    return { theme, getClass }
}