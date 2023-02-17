import * as z from 'zod';

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(1, 'username_required')
      .min(3, 'min_length_3')
      .max(15, 'max_length_16')
      .regex(/^[a-z0-9_\-]+$/, 'only_lowercase_and_numbers'),
    email: z
      .string()
      .min(1, 'email_required')
      .regex(/^(.+)@(.+)$/, 'email_invalid'),
    password: z
      .string()
      .min(1, 'password_required')
      .min(8, 'password_length')
      .max(15, 'max_length_16')
      .regex(/^[a-z0-9_\-]+$/, 'password_only_lowercase'),
    password_confirmation: z.string({
      required_error: 'password_confirmation_required',
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'password_no_match',
    path: ['password_confirmation'],
  });
