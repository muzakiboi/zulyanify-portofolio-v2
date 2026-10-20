---
name: gsap-animation
description: SOP for implementing smooth, modern GSAP animations for portfolios.
---

# GSAP Animation Expert

1. **ScrollTrigger:** Use GSAP ScrollTrigger for scroll-based animations (like horizontal scrolling).
2. **React Integration:** Always use `@gsap/react` hook `useGSAP()` to ensure proper cleanup of timelines in React/Next.js components.
3. **Smoothness:** Avoid animating `layout` properties (width, height, top). Only animate `transform` (x, y, scale) and `opacity`.
