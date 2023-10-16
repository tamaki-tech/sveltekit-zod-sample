import { z } from "zod";

const UserSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
  password: z.string().min(1),
});

export const load = () => {
  return {
    schema: UserSchema,
  };
};
