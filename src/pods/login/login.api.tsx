/* eslint-disable prettier/prettier */
export const isValidLogin = (
  user: string,
  password: string
): Promise<boolean> =>
  new Promise((resolve) => {
    resolve(user === "admin" && password === "test");
  });
