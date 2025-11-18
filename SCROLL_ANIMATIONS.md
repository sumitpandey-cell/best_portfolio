# Horizontal Text Reveal Component

## Features

✅ **Smooth scroll-driven animation** using GSAP ScrollTrigger
✅ **Full viewport pinning** - each block occupies 100vh and pins during reveal
✅ **Bidirectional text sliding** - configurable forward/reverse per block
✅ **Hardware acceleration** - uses `transform3d` and `will-change`
✅ **Mobile optimized** - responsive font sizes and touch-friendly
✅ **Accessibility** - respects `prefers-reduced-motion` and screen readers
✅ **Performance** - GPU acceleration and efficient scroll handling

## Customization

### Text Blocks Configuration
```typescript
const textBlocks: TextRevealBlock[] = [
  {
    id: 'block1',
    lines: ['Your text here', 'Second line'],
    direction: 'forward' // or 'reverse'
  }
];
```

### Animation Speed
Adjust the `scrub` value in ScrollTrigger:
```javascript
scrub: 1.5, // Higher = slower, Lower = faster
```

### Font Sizes
Modify in CSS:
```css
font-size: clamp(2.5rem, 8vw, 8rem); /* min, preferred, max */
```

### Colors
```css
.revealLine {
  color: white; /* Main text */
}
.revealLine.highlight {
  color: #888; /* Highlighted text */
}
.revealLine.year {
  color: #666; /* Year text */
}
```

## Performance Notes

1. **GPU Acceleration**: Uses `transform3d()` and `will-change: transform`
2. **Smooth Scrolling**: GSAP's ScrollTrigger with `scrub` for 60fps
3. **Memory Management**: Proper cleanup with `ctx.revert()`
4. **Reduced Motion**: Fallback for accessibility preferences
5. **Resize Handling**: Efficient refresh on window resize

## Mobile Optimization

- Responsive font sizes using `clamp()`
- Touch-friendly scroll behavior
- Reduced complexity on smaller screens
- Efficient reflow handling

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support  
- Safari: Full support (iOS 13.4+)
- Mobile browsers: Optimized performance

## Bundle Size

- GSAP ScrollTrigger: ~30KB gzipped
- Component code: ~2KB
- CSS: ~1KB

Total: ~33KB for production-ready scroll animations.