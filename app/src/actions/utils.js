export function getFormBody(details) {
  return Object.keys(details)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(details[key]))
    .join('&');
}
