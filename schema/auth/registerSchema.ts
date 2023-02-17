import * as z from 'zod';

// Uncommenting the next line will fix the app (no need to import anything from shared, the empty import statement is enough)
// import {} from '../shared';

// Changing these to relative imports will fix the app:
import {
  emailSchema,
  passwordWithConfirmationSchema,
  usernameSchema,
} from 'schema';

export const registerSchema = z.intersection(
  z.intersection(usernameSchema, emailSchema),
  passwordWithConfirmationSchema
);
