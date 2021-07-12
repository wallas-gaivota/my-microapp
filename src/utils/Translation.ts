const windowObject: any = window;

export const t = (key?: string | string[]): string => {
  let newKey = key || "";
  if (typeof key === "object") newKey = key.map(item => item.toLowerCase());
  if (typeof key === "string") newKey = key.toLowerCase();
  return windowObject["i18nextGlobal"].t(newKey);
};
