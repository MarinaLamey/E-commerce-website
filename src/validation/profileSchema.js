
import { z } from "zod";

export const profileSchema = z.object({

  email: z.string().email("Invalid email").optional(),
  phone: z.string().min(10, "Phone must be 10 digits").optional(),
  firstName: z.string().min(1, { message: "First name is required" }).optional(),
  lastName: z.string().min(1, { message: "Last name is required" }).optional(),
});


