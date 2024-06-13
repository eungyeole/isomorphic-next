import cookie from "cookie";

interface SetCookieOptions {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | "none" | "lax" | "strict";
  partitioned?: boolean;
}

export class Cookie {
  private isClient = (): boolean => typeof window !== "undefined";

  private getNextCookies = () => {
    const { cookies } = require("next/headers");

    return cookies() as {
      get: (key: string) => { value: string | undefined };
      set: (key: string, value: string, options?: SetCookieOptions) => void;
    };
  };

  private stringfy = (value: unknown) => {
    return typeof value === "string" ? value : JSON.stringify(value);
  };

  public get = (key: string) => {
    if (this.isClient()) {
      const cookies = cookie.parse(document.cookie);

      return cookies[key];
    }

    const cookies = this.getNextCookies();

    return cookies.get(key)?.value;
  };

  public set = (key: string, value: unknown, options?: SetCookieOptions) => {
    const stringifiedValue = this.stringfy(value);

    if (this.isClient()) {
      document.cookie = cookie.serialize(key, stringifiedValue, options);
      return;
    }

    const cookies = this.getNextCookies();

    cookies.set(key, stringifiedValue, options);
  };
}
