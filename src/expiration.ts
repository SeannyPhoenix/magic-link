export const setExpiration = (timeout: number): () => number => {
  return () => Date.now() + timeout * 60000;
};
