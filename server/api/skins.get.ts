export default defineEventHandler(async (event)=>{
    const DB = event.context.cloudflare.env.DB;
    const query = getQuery(event);
    const { results } = await DB.prepare(
        "SELECT * FROM skins s LEFT JOIN characters c ON s.hero_id = c.hero_id WHERE c.slug = ? ORDER BY rarity ASC",
    )
    .bind(query.slug)
    .all();
    if(results.length < 1){
        return [];
    }
    return results
})