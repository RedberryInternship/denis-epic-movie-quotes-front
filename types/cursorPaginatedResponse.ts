export type CursorPaginatedResponse<T> = {
  success: boolean;
  next_cursor: string;
  data: T;
};
