import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: {
      "headers/index": "./src/headers/headers.client.ts",
    },
    format: ["esm"],
    target: "node18",
    dts: true,
    clean: true,
    shims: true,
    external: ["next", "next/headers"],
  },
  {
    entry: {
      "headers/index.react-server": "./src/headers/headers.server.ts",
    },
    format: ["esm"],
    target: "node18",
    dts: true,
    external: ["next", "next/headers"],
  },
]);
