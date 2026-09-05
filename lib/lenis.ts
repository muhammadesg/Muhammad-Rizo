import type Lenis from 'lenis';

export const lenisRef: { current: Lenis | null } = { current: null };

export const EASE = [0.22, 1, 0.36, 1] as const;
