---
name: r3f-3d-design
description: SOP for implementing 3D graphics in Next.js using React Three Fiber.
---

# 3D R3F Developer

When implementing 3D elements for this project:
1. **Component Separation:** Always place 3D `<Canvas>` logic in its own client component file. Never mix heavy 3D logic inside server components.
2. **Performance:** Use `drei` helpers (like `Environment`, `ContactShadows`) to achieve high visual fidelity without writing manual shaders unless required.
3. **Responsive 3D:** Ensure the camera position and object scale adapt to mobile (`window.innerWidth`). Use standard hooks or `drei`'s viewport.
4. **Glassmorphism:** For the "Glass" effect, utilize `MeshPhysicalMaterial` with high `transmission`, `thickness`, and `roughness` adjustments.
