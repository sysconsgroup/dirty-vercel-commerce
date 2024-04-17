export const t = (dictionary: Record<string, string>) => (key: string) => {
  return dictionary[key] || key;
};
