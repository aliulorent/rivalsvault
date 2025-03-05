export default defineEventHandler(async (event)=>{
    const DB = event.context.cloudflare.env.DB;
    const query = getQuery(event);
    const dbQuery = await DB.prepare(
        `SELECT s.skin_id, c.hero_id, s.skin_name, c.hero_name, c.slug FROM skins s INNER JOIN characters c ON s.hero_id = c.hero_id
         WHERE skin_name LIKE ?`,
    )
    .bind(`%${query.input}%`)
    .all<searchQuery>();
    const dbQuery2 = await DB.prepare(
        `SELECT * FROM characters
         WHERE hero_name LIKE ?`,
    )
    .bind(`%${query.input}%`)
    .all<charactersQuery>();
    return {
        skins: dbQuery.results,
        heroes: dbQuery2.results
    }
})