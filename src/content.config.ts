import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const posts = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/posts" }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        tags: z.array(z.string()),
    }),
});

export const collections = { posts };
