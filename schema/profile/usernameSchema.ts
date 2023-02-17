import * as z from 'zod';

export const usernameSchema = z.object({
  username: z
    .string()
    .min(1, 'username_required')
    .min(3, 'min_length_3')
    .max(15, 'max_length_16')
    .regex(/^[a-z0-9_\-]+$/, 'only_lowercase_and_numbers'),
});
