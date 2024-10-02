import type { CookieSerializeOptions } from "cookie";

export const nextCookies = () => {
  // Ignore the server-only rule using dynamic import.
  const { cookies } = require("next/headers");

  return cookies() as {
    get: (key: string) => { value: string | undefined };
    getAll: () => Array<{
      name: string;
      value: string;
    }>;
    has: (key: string) => boolean;
    set: (
      key: string,
      value: unknown,
      options?: CookieSerializeOptions
    ) => void;
    delete: (key: string) => void;
  };
};
