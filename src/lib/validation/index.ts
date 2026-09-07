import { z } from 'zod';
import { ValidationError } from '$lib/server/errors';

export const idSchema = z.string().trim().min(1).max(128);
export const slugSchema = z
  .string()
  .trim()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  .max(63);
export const emailSchema = z.string().trim().email().max(320);

export function parse<T extends z.ZodType>(
  schema: T,
  input: unknown,
): z.infer<T> {
  const result = schema.safeParse(input);
  if (!result.success)
    throw new ValidationError('The request contains invalid fields.');
  return result.data;
}
