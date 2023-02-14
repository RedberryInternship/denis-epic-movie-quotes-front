import * as z from 'zod';

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, 'credentials_required')
    .min(3, 'credentials_length'),
  password: z.string().min(1, 'password_required'),
});
