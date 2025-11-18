// Utility functions for controlling smooth scroll
export const smoothScrollTo = (target: string | number, duration: number = 1.5) => {
  const event = new CustomEvent('lenisControl', {
    detail: {
      action: 'scrollTo',
      target,
      duration
    }
  });
  window.dispatchEvent(event);
};

export const stopSmoothScroll = () => {
  const event = new CustomEvent('lenisControl', {
    detail: {
      action: 'stop'
    }
  });
  window.dispatchEvent(event);
};

export const startSmoothScroll = () => {
  const event = new CustomEvent('lenisControl', {
    detail: {
      action: 'start'
    }
  });
  window.dispatchEvent(event);
};

// Scroll to section by ID
export const scrollToSection = (sectionId: string, duration: number = 1.5) => {
  smoothScrollTo(`#${sectionId}`, duration);
};

// Scroll to top
export const scrollToTop = (duration: number = 1.5) => {
  smoothScrollTo(0, duration);
};

// Scroll to bottom
export const scrollToBottom = (duration: number = 1.5) => {
  smoothScrollTo(document.body.scrollHeight, duration);
};