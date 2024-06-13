import type { CookieSerializeOptions } from "cookie";

export const getNextCookies = () => {
  const { cookies } = require("next/headers");

  return cookies() as {
    get: (key: string) => { value: string | undefined };
    getAll: () => Record<string, string>;
    has: (key: string) => boolean;
    set: (key: string, value: string, options?: CookieSerializeOptions) => void;
    delete: (key: string) => void;
  };
};
