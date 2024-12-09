import { ClientCookie } from "@/components/client-cookie";
import { CookieSetter } from "@/components/cookie-setter";
import { ServerCookie } from "@/components/server-cookie";

import { headers } from "isomorphic-next/headers";

export default function Home() {
  return (
    <div>
      <CookieSetter />
      <ClientCookie />
      <ServerCookie />
    </div>
  );
}
