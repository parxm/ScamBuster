import { z } from "zod";

export const usernamevalidation = z
  .string()
  .min(2, "Username must be atleast 2 characters")
  .max(20, "Username must be less than 21 characters")
  .regex(/[^a-zA-Z0-9_]/, "Username must not contain special characters");


  export const SignUpSchema=z.object({
    username:usernamevalidation,
    email:z.string().email({message:"Invalid Email"}),
    password:z.string().min(6,{message:"Password should contain 6 characters at least"}),

  })