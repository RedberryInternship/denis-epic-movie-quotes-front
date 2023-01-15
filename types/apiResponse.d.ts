export type ApiResponse<T> = {
  success: boolean;
  message: string;
  errors?: { [K in keyof T]: string[] | string };
};
