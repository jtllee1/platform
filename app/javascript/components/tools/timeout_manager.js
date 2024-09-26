const timeouts = [];
const intervals = [];

export function setTimeout(callback, delay) {
  const timeoutId = globalThis.setTimeout(callback, delay);
  timeouts.push(timeoutId);
  return timeoutId;
}

export function setInterval(callback, delay) {
  const intervalId = globalThis.setInterval(callback, delay);
  intervals.push(intervalId);
  return intervalId;
}

export function clearAllTimeouts() {
  timeouts.forEach((timeoutId) => {
    globalThis.clearTimeout(timeoutId);
  });
  timeouts.length = 0;
}

export function clearAllIntervals() {
  intervals.forEach((intervalId) => {
    globalThis.clearInterval(intervalId);
  });
  intervals.length = 0;
}

export function clearAll() {
  clearAllTimeouts();
  clearAllIntervals();
}
