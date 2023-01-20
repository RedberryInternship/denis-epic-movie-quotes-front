export const cookiesObjToStr = (
  cookiesObj: Partial<{ [key: string]: string }>
) => {
  return Object.entries(cookiesObj).reduce(
    (cookieString, currentCookie) =>
      `${cookieString}${currentCookie[0]}=${currentCookie[1]}; `,
    ''
  );
};
