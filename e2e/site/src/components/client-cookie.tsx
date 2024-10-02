"use client";
import { cookies } from "isomorphic-next/headers";
import { useEffect } from "react";

export const ClientCookie = () => {
  useEffect(() => {
    console.log("get: ", cookies().get("isomorphic-next"));
    console.log("getAll: ", cookies().getAll());
    console.log("has: ", cookies().has("isomorphic-next"));
  }, []);

  return <></>;
};
