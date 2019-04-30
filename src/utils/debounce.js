function debounce(callback, delay) {
  if (typeof callback !== 'function' || !Number.isInteger(delay)) {
    throw new TypeError('Arguments must be valid types.');
  }
  let debounceTimer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => callback.apply(context, args), delay);
  }
}

export default debounce;
