export function parseFormElements(event) {
  const formData = new FormData(event.target);
  const formElements = Object.fromEntries(formData);
  return formElements;
}
