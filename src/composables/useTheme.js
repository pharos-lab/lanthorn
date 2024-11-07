// src/composables/useTheme.js
import { merge } from 'lodash-es';
import { theme as defaultTheme } from '@/config/theme.js';
import { theme as userTheme } from '/lantern.config.js'
import { reactive } from 'vue'


export function useTheme() {
  // Method to merge user theme with the default theme
  const theme = reactive(merge(defaultTheme, userTheme))

  return { theme }
}
