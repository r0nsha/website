import { getCollection } from "astro:content";

export async function getPosts() {
    const posts = await getCollection("posts", ({ data }) =>
        import.meta.env.PROD ? data.draft !== true : true
    );
    posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
    return posts;
}
