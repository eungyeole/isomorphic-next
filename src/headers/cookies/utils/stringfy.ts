export const stringfy = (value: unknown) => {
  return typeof value === "string" ? value : JSON.stringify(value);
};
