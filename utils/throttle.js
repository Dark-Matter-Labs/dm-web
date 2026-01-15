/**
 * Throttle function to limit how often a function can be called
 * @param {Function} func - The function to throttle
 * @param {number} limit - Time in milliseconds between function calls
 * @returns {Function} Throttled function
 */
export function throttle(func, limit) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  
  let inThrottle;
  let timeoutId;
  
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      timeoutId = setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Debounce function to delay function execution until after wait time
 * @param {Function} func - The function to debounce
 * @param {number} wait - Time in milliseconds to wait
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
