// src/composables/useTheme.js
import { merge } from 'lodash-es';
import { theme as defaultTheme } from '@/config/theme.js';
import { theme as userTheme } from '/lantern.config.js'
import { reactive } from 'vue'


export function useTheme() {
  // Method to merge user theme with the default theme
  const theme = reactive(merge(defaultTheme, userTheme))

  const getClasses = (props, component, options = {}) => {
    const {
      exclude = [], // Specify which class types to exclude
      debug = false, // Debug mode for logging classes
    } = options;
  
    // Determine which class types to include by default
    const allClassTypes = ['background', 'hover', 'borderRadius', 'shadow', 'padding', 'size'];
    const include = allClassTypes.filter(type => !exclude.includes(type));
  
    const classes = {};
  
    if (include.includes('background')) {
      if (props.variant === 'outline' || props.variant === 'text') {
        classes.background = theme.colors.text[props.color];
        if (props.variant === 'outline') {
          classes.background += ' border border-current ' + (theme.borders[component] || theme.borders.base);
        }
      } else {
        classes.background = theme.colors.background[props.color][props.variant];
      }
    }
  
    if (include.includes('hover')) {
      classes.hover = props.hover ? theme.colors.background.hover[props.color][props.variant] : null;
    }
  
    if (include.includes('borderRadius')) {
      classes.borderRadius = theme.borderRadius[props.rounded];
    }
  
    if (include.includes('shadow')) {
      classes.shadow = theme.shadow[component];
    }
  
    if (include.includes('padding')) {
      classes.padding = theme.padding[component];
    }
  
    if (include.includes('size')) {
      classes.size = theme.size[component]?.[props.size];
    }
  
    if (debug) {
      console.log(`Classes for ${component}:`, classes);
    }
  
    // Filter out undefined or null classes and return a flattened string
    return Object.values(classes).filter(Boolean).join(' ');
  };

  return { theme, getClasses }
}
