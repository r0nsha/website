import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
    const posts = await getCollection("posts");
    return rss({
        title: "Ron Shavit",
        description: "Ron's half-baked ideas and opinions",
        site: context.site,
        items: posts.map((p) => ({
            title: p.data.title,
            pubDate: p.data.pubDate,
            tags: p.data.tags,
            link: `/posts/${p.id}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}
