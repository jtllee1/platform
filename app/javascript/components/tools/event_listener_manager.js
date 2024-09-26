const eventListeners = [];

export function addEventListener(element, event, callback) {
  element.addEventListener(event, callback);
  eventListeners.push({ element, event, callback });
}

export function clearAllEventListeners() {
  eventListeners.forEach(({ element, event, callback }) => {
    element.removeEventListener(event, callback);
  });
  eventListeners.length = 0;
}
