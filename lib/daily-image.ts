// All hero images from /public/images
export const heroImages = [
  "/images/alicia-christin-gerald-hPE_4f9KVVo-unsplash.jpg",
  "/images/david-foodphototasty-FGrO63vUbaA-unsplash.jpg",
  "/images/fakhar-uddin-ac8665AKFD8-unsplash.jpg",
  "/images/jacopo-maiarelli--gOUx23DNks-unsplash.jpg",
  "/images/louis-hansel-GnxiJQiNHuw-unsplash.jpg",
  "/images/luna-wang-APetw1y9_mY-unsplash.jpg",
  "/images/nrd-D6Tu_L3chLE-unsplash.jpg",
  "/images/olivia-zumbrunn-BzBs8DlCfuE-unsplash (1).jpg",
  "/images/olivia-zumbrunn-BzBs8DlCfuE-unsplash.jpg",
  "/images/samuel-costa-melo-5k2VCE77Td0-unsplash.jpg",
  "/images/vincent-dorig-1MjYnMxGKvU-unsplash.jpg",
];

/**
 * Returns a hero image path that is stable for the entire day
 * but rotates daily. Each page can pass a `slot` offset (0, 1, 2…)
 * so different pages show different images on the same day.
 */
export function getDailyImage(slot = 0): string {
  const now = new Date();
  // Day index since epoch — changes at midnight UTC
  const dayIndex = Math.floor(now.getTime() / (1000 * 60 * 60 * 24));
  const idx = (dayIndex + slot) % heroImages.length;
  return heroImages[idx];
}
