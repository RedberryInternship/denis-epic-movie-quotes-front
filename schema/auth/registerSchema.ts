import * as z from 'zod';
import {
  emailSchema,
  passwordWithConfirmationSchema,
  usernameSchema,
} from 'schema';

export const registerSchema = z.intersection(
  usernameSchema,
  emailSchema,
  passwordWithConfirmationSchema
);
