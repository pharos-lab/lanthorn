// src/composables/useTheme.js
import { merge } from 'lodash-es';
import { theme as defaultTheme } from '@/config/theme.js';
import { theme as userTheme } from '/lantern.config.js'
import { reactive, computed } from 'vue'


export function useTheme() {
  // Method to merge user theme with the default theme
  const theme = reactive(merge(defaultTheme, userTheme))


  const getClasses = (props, component) => {
    let backgroundClass
    if (props.variant == 'outline' || props.variant == 'text') {
      backgroundClass = theme.colors.text[props.color]
      backgroundClass += props.variant == 'outline' ? ' border border-current ' + (theme.borders[component] ||theme.borders.base) : ''
    } else {
      backgroundClass = theme.colors.background[props.color][props.variant]
    }
  
    const hoverClass = props.hover ? theme.colors.background.hover[props.color][props.variant] : null

    const borderRadiusClass = theme.borderRadius[props.rounded] 

    const shadowClass = theme.shadow[component]
  
    const paddingClass = theme.padding[component]
    
    return [backgroundClass, shadowClass, paddingClass, hoverClass, borderRadiusClass]
  }


  return { theme, getClasses }
}
