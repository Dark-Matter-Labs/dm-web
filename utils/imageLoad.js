/**
 * Generate a placeholder SVG for image loading states
 * @param {number} w - Width of the placeholder
 * @param {number} h - Height of the placeholder
 * @returns {string} SVG string
 */
export const convertImage = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#E2E2E2" offset="20%" />
      <stop stop-color="#585858" offset="50%" />
      <stop stop-color="#7D7D7D" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#111112" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="0.3s" repeatCount="indefinite"  />
</svg>`;

/**
 * Convert a string to base64 encoding
 * Works in both browser and Node.js environments
 * @param {string} str - String to encode
 * @returns {string} Base64 encoded string
 */
export const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
