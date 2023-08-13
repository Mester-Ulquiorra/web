export function localDate(time: number | string) {
  if (typeof time === "number") {
    return new Date(time * 1000).toLocaleString();
  } else {
    return new Date(time).toLocaleString();
  }
}

export function capitalise(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
