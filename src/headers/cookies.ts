import * as cookie from "cookie";
import { isClient } from "../utils/is-client.js";
import { nextCookies } from "../lib/next-cookies.js";

class NextIsomorphicCookies {
  get = (key: string) => {
    if (isClient()) {
      const cookies = cookie.parse(document.cookie);
      return cookies[key];
    }

    const cookies = nextCookies();
    return cookies.get(key)?.value;
  };

  getAll = () => {
    if (isClient()) {
      const parsedCookies = cookie.parse(document.cookie);

      return Object.entries(parsedCookies).map(([name, value]) => ({
        name,
        value,
      }));
    }

    const cookies = nextCookies();
    return cookies.getAll();
  };

  set = (
    key: string,
    value: unknown,
    options?: cookie.CookieSerializeOptions
  ) => {
    if (isClient()) {
      const stringifiedValue =
        value instanceof Object ? JSON.stringify(value) : String(value);

      document.cookie = cookie.serialize(key, stringifiedValue, options);
      return;
    }

    const cookies = nextCookies();
    cookies.set(key, value, options);
  };

  delete = (key: string) => {
    if (isClient()) {
      document.cookie = cookie.serialize(key, "", { maxAge: -1 });
      return;
    }

    const cookies = nextCookies();
    cookies.delete(key);
  };

  has = (key: string) => {
    if (isClient()) {
      return Boolean(cookie.parse(document.cookie)[key]);
    }

    const cookies = nextCookies();
    return cookies.has(key);
  };
}

export const cookies = () => new NextIsomorphicCookies();
