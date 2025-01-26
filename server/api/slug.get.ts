export default defineEventHandler(async (event)=>{
    const DB = event.context.cloudflare.env.DB;
    const query = getQuery(event)
    const { results } = await DB.prepare(
        "SELECT * FROM characters WHERE slug = ?",
    )
    .bind(query.slug)
    .run();
    return results
})