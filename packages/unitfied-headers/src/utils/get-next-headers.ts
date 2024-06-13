export const getNextHeaders = () => {
  const headers = require("next/headers");

  return headers() as Headers;
};
