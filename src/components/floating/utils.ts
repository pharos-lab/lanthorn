// composables/useFloatingPlacement.js
export function getPlacementClass(placement: string) {
    const map = {
      top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
      bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
      left: 'right-full mr-2 top-1/2 -translate-y-1/2',
      right: 'left-full ml-2 top-1/2 -translate-y-1/2',
  
      'top-start': 'bottom-full mb-2 left-0',
      'top-end': 'bottom-full mb-2 right-0',
      'bottom-start': 'top-full mt-2 left-0',
      'bottom-end': 'top-full mt-2 right-0',
  
      'left-start': 'right-full mr-2 top-0',
      'left-end': 'right-full mr-2 bottom-0',
      'right-start': 'left-full ml-2 top-0',
      'right-end': 'left-full ml-2 bottom-0'
    }
    return map[placement as keyof typeof map] || ''
  }
  
  export function getTransitionName(placement: string) {
    const map = {
      top: 'fade-slide-down',
      bottom: 'fade-slide-up',
      left: 'fade-slide-right',
      right: 'fade-slide-left',
  
      'top-start': 'fade-slide-down',
      'top-end': 'fade-slide-down',
      'bottom-start': 'fade-slide-up',
      'bottom-end': 'fade-slide-up',
  
      'left-start': 'fade-slide-right',
      'left-end': 'fade-slide-right',
      'right-start': 'fade-slide-left',
      'right-end': 'fade-slide-left'
    }
    return map[placement as keyof typeof map] || 'fade'
  }
  