import { createImageUrlBuilder } from '@sanity/image-url';

import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

/**
 * Build a Sanity CDN URL for an image source.
 *
 * The builder is immutable — every method returns a new builder rather than
 * mutating in place. The previous version called `builder.auto('format')`
 * and friends as statements and then read `builder.url()`, so each of those
 * transforms was created and thrown away: the URL came back pointing at the
 * full-size original with no `auto=format` and no `fit=max`. Chained
 * properly here.
 *
 * @param {Object|string} source - Sanity image source
 * @param {Object} [options] - width / height / quality
 * @returns {string|null}
 */
export const urlForImage = (source, options = {}) => {
  if (!source) return null;

  let builder = imageBuilder?.image(source);
  if (!builder) return null;

  builder = builder.auto('format').fit('max');

  if (options.width) builder = builder.width(options.width);
  if (options.height) builder = builder.height(options.height);
  if (options.quality) builder = builder.quality(options.quality);

  return builder.url();
};
