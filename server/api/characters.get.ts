export default defineEventHandler(async (event)=>{
    const DB = event.context.cloudflare.env.DB;
    const { results } = await DB.prepare(
        "SELECT * FROM characters ORDER BY hero_name ASC",
    )
    .all();
    return results
})