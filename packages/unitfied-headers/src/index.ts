import { isClient } from "../../unified-cookies/src/utils/is-client";
import { getNextHeaders } from "./utils/get-next-headers";

const headers = () => {
  if (isClient()) {
    return new Headers();
  }

  return getNextHeaders();
};

export { headers };
