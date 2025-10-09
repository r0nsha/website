import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const kebabCaseString = z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { message: "Must be in kebab-case" });

const schema = z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(kebabCaseString),
    draft: z.boolean().optional(),
});

export type Post = z.infer<typeof schema>;

const posts = defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
    schema,
});

export const collections = { posts };
