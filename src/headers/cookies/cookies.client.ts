import * as cookie from "cookie";
import { stringfy } from "./utils/stringfy";

class NextIsomorphicCookies {
  get = (key: string) => {
    const cookies = cookie.parse(document.cookie);
    return cookies[key];
  };

  getAll = () => {
    const parsedCookies = cookie.parse(document.cookie);

    return Object.entries(parsedCookies).map(([name, value]) => ({
      name,
      value,
    }));
  };

  set = (
    key: string,
    value: unknown,
    options?: cookie.CookieSerializeOptions
  ) => {
    const stringifiedValue = stringfy(value);

    document.cookie = cookie.serialize(key, stringifiedValue, options);
    return;
  };

  delete = (key: string) => {
    document.cookie = cookie.serialize(key, "", { maxAge: -1 });
    return;
  };

  has = (key: string) => {
    return Boolean(cookie.parse(document.cookie)[key]);
  };
}

export const cookies = () => new NextIsomorphicCookies();
