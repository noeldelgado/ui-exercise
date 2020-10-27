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

/**
 * Convert an HTML string to plain text
 * @param {String} [htmlString=''] string that contains the HTML that will be converted to plain text
 * @return {String} plain text value
 */
export function getTextContent(htmlString = '') {
  const element = document.createElement('div');
  element.insertAdjacentHTML('beforeend', htmlString);

  return element.innerText;
}
