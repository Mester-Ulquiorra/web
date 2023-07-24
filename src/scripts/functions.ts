export function localDate(time: number | string) {
  if (typeof time === "number") {
    return new Date(time * 1000).toLocaleString();
  } else {
    return new Date(time).toLocaleString();
  }
}

export function getUrl(type?: string) {
  let url;

  if (type === "punishments") {
    url = `https://ucp-api.mester.info/api/user/punishments${ process.env.NODE_ENV === "development" ? "?test=true" : ""
      }`;
  } else {
    url = `https://ucp-api.mester.info/api/user${ process.env.NODE_ENV === "development" ? "?test=true" : ""
      }`;
  }

  return new URL(url);
}
