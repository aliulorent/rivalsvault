import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'

// server/api/__sitemap__/urls.ts
export default defineSitemapEventHandler(async (event) => {
    const DB = event.context.cloudflare.env.DB;
    const { results } = await DB.prepare(
        "SELECT * FROM skins s INNER JOIN characters c ON s.hero_id = c.hero_id",
    )
    .all<skinsQuery>();
    const sitemapUrls: SitemapUrlInput[] = results.map((item: skinsQuery)=> ({
        loc: `/skins/${item.slug}/?skin=${item.skin_id}`
    }))
    return sitemapUrls
})