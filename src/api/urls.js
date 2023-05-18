export const URL = "http://localhost:8008/user/"; //local
export const IMG_URL = "http://localhost:8008/"; //local

export function resolveUrl(_url) {
  if (_url) {
    return _url.replace(/^.*[\\\/]/, "");
  }
  return "";
}
