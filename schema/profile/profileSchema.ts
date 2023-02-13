import * as z from 'zod';

export const profileSchema = z
  .object({
    image: z.any().optional(),
    username: z
      .string()
      .min(1, 'username_required')
      .min(3, 'min_length_3')
      .max(15, 'max_length_16')
      .regex(/^[a-z0-9_\-]+$/, 'only_lowercase_and_numbers'),
    current_password: z.string(),
    password: z
      .string()
      .min(8, 'password_length')
      .max(15, 'max_length_16')
      .regex(/^[a-z0-9_\-]+$/, 'password_only_lowercase')
      .optional()
      .or(z.literal('')),
    password_confirmation: z
      .string({
        required_error: 'password_confirmation_required',
      })
      .optional(),
  })
  .refine((data) => !data.current_password || data.password, {
    message: 'password_required',
    path: ['password'],
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'password_no_match',
    path: ['password_confirmation'],
  });
