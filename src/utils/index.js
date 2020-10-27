/**
 * Convert and format a date string to local
 * @param {String} [dateString='']
 * @param {Object} [dateOptions={}]
 * @return {String} new formatted date string
 */
export function formatDate(dateString = '', dataOptions = {}) {
  const date = dateString ? new Date(dateString) : new Date();

  return date.toLocaleDateString(navigator.language, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    ...dataOptions,
  });
}
