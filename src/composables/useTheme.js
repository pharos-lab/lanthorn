// src/composables/useTheme.js
import { merge } from 'lodash-es';
import { theme as defaultTheme } from '@/config/theme.js';
import { theme as userTheme } from '/lantern.config.js'
import { reactive } from 'vue'


export function useTheme() {
  // Method to merge user theme with the default theme
  const theme = reactive(merge(defaultTheme, userTheme))

  const generateClass = (props, component, property) => {
    switch (property) {
      case 'background':
        if (props.variant === 'outline' || props.variant === 'text') {
          let bgClass = theme.colors.text[props.color];
          if (props.variant === 'outline') {
            bgClass += ' border border-current ' + (theme.borders[component] || theme.borders.base);
          }
          return bgClass;
        }
        return theme.colors.background[props.color][props.variant];
      case 'hover':
        return props.hover ? theme.colors.background.hover[props.color][props.variant] : null;
      case 'borderRadius':
        return theme.borderRadius[props.rounded];
      case 'shadow':
        return props.shadow ? theme.shadow[component] : null;
      case 'padding':
        return theme.padding[component];
      case 'size':
        return props.size ? theme.size[component]?.[props.size] : null;
      default:
        return null;
    }
  };

  const getClasses = (props, component, options = {}) => {
    const { exclude = [], debug = false } = options;
    const allClassTypes = ['background', 'hover', 'borderRadius', 'shadow', 'padding', 'size'];
    const include = allClassTypes.filter(type => !exclude.includes(type));
  
    const classes = include.map(type => generateClass(props, component, type)).filter(Boolean);
  
    if (debug) console.log(`Classes for ${component}:`, classes);
  
    return classes.join(' ');
  };

  const getClass = (props, component, property) => {
    return generateClass(props, component, property);
  };

  const getClassesObject = (props, component, options = {}) => {
    const { exclude = [], debug = false } = options;
    const allClassTypes = ['background', 'hover', 'borderRadius', 'shadow', 'padding', 'size'];
    const include = allClassTypes.filter(type => !exclude.includes(type));
  
    const classes = {};
    include.forEach(type => {
      const classValue = generateClass(props, component, type);
      if (classValue) classes[type] = classValue;
    });
  
    if (debug) console.log(`Classes for ${component}:`, classes);
  
    return classes;
  };

  return { theme, getClasses, getClassesObject, getClass }
}
