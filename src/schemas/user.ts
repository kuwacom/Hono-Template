import { z } from 'zod';

export const CreateUserBodySchema = z.object({
  name: z.string().trim().min(1).max(100),
});
export type CreateUserBody = z.infer<typeof CreateUserBodySchema>;

export const UserParamsSchema = z.object({
  userId: z.coerce.number().int().positive(),
});
export type UserParams = z.infer<typeof UserParamsSchema>;
