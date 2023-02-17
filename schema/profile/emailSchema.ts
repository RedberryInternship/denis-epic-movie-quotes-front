import * as z from 'zod';

export const emailSchema = z.object({
  email: z
    .string()
    .min(1, 'email_required')
    .regex(/^(.+)@(.+)$/, 'email_invalid'),
});
