import createImageUrlBuilder from '@sanity/image-url';

import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

/**
 * Generate optimized image URL from Sanity image source
 * @param {Object} source - Sanity image source object
 * @param {Object} options - Optional image transformation options
 * @returns {string} Optimized image URL
 */
export const urlForImage = (source, options = {}) => {
  if (!source) return null;

  const builder = imageBuilder?.image(source);

  if (!builder) return null;

  // Apply default optimizations
  builder.auto('format').fit('max');

  // Apply custom options
  if (options.width) builder.width(options.width);
  if (options.height) builder.height(options.height);
  if (options.quality) builder.quality(options.quality);

  return builder.url();
};
