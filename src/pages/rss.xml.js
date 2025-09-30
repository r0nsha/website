import rss from "@astrojs/rss";
import { getPosts } from "@/lib/collections";

export async function GET(context) {
    const posts = await getPosts();
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
