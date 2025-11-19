
export const scrollToSection = (targetId: string, duration: number = 1.5) => {
    const target = targetId.startsWith('#') ? targetId : `#${targetId}`;
    const event = new CustomEvent('lenisControl', {
        detail: {
            action: 'scrollTo',
            target,
            duration,
        },
    });
    window.dispatchEvent(event);
};

export const scrollToTop = (duration: number = 1.5) => {
    const event = new CustomEvent('lenisControl', {
        detail: {
            action: 'scrollTo',
            target: 0,
            duration,
        },
    });
    window.dispatchEvent(event);
};
