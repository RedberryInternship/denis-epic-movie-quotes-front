export const useGoogleAuthButton = () => {
  return () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth/redirect`;
  };
};
