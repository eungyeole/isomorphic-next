import { nextHeaders } from "../lib/next-headers";
import { isClient } from "../utils/is-client";

export const headers = () => {
  if (isClient()) {
    return new Headers();
  }

  return nextHeaders();
};
