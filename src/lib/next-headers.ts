export const nextHeaders = () => {
  const headers = require("next/headers");

  return headers() as Headers;
};
