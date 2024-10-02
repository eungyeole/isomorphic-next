"use client";
import { cookies } from "isomorphic-next/headers";

export const CookieSetter = () => {
  return (
    <div>
      <button onClick={() => cookies().set("isomorphic-next", "cookie")}>
        Set Client
      </button>
      <button onClick={() => cookies().delete("isomorphic-next")}>
        Delete Client
      </button>
    </div>
  );
};
