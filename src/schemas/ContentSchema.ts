import { z } from "zod";

export const ContentSchema = z
  .string()
  ?.min(20, "Content must be at least of 20 words")
  .max(200, "Content must be no longer than 200 words");



