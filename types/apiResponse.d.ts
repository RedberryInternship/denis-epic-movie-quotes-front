export type ApiResponse<T> = {
  success: boolean;
  message: string;
  errors?: { [key: T]: [string] };
};
