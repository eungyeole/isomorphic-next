import * as cookie from "cookie";
import { getNextCookies } from "./utils/next-cookies";
import { isClient } from "./utils/is-client";

class NextUnifiedCookies {
  get = (key: string) => {
    if (isClient()) {
      const cookies = cookie.parse(document.cookie);
      return cookies[key];
    }

    const cookies = getNextCookies();
    return cookies.get(key)?.value;
  };

  getAll = () => {
    if (isClient()) {
      return cookie.parse(document.cookie);
    }

    const cookies = getNextCookies();
    return cookies.getAll();
  };

  set = (
    key: string,
    value: unknown,
    options?: cookie.CookieSerializeOptions
  ) => {
    const stringifiedValue = JSON.stringify(value);

    if (isClient()) {
      document.cookie = cookie.serialize(key, stringifiedValue, options);
      return;
    }

    const cookies = getNextCookies();
    cookies.set(key, stringifiedValue, options);
  };

  delete = (key: string) => {
    if (isClient()) {
      document.cookie = cookie.serialize(key, "", { maxAge: -1 });
      return;
    }

    const cookies = getNextCookies();
    cookies.delete(key);
  };

  has = (key: string) => {
    if (isClient()) {
      return Boolean(cookie.parse(document.cookie)[key]);
    }

    const cookies = getNextCookies();
    return cookies.has(key);
  };
}

export const cookies = () => new NextUnifiedCookies();
