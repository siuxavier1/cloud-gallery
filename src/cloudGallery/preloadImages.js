import { cloudImages } from "./cloudImages";

// Preload images to prevent first-load blank rendering in modal

export function preloadImages() {
  Object.values(cloudImages).forEach((src) => {
    const img = new Image();
    img.src = src;

    img.decode?.().catch(() => {});
  });
}