import { cookies } from "isomorphic-next/headers";
import { FormEvent } from "react";

export const ServerCookie = () => {
  console.log("get: ", cookies().get("isomorphic-next"));
  console.log("getAll: ", cookies().getAll());
  console.log("has: ", cookies().has("isomorphic-next"));

  return <></>;
};
