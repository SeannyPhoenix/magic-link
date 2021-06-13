export const setExpiration = (timeout) => {
    return () => Date.now() + timeout * 60000;
};
