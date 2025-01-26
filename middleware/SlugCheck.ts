export default defineNuxtRouteMiddleware(async (to, from) => {
    const {data} = await useFetch('/api/slug', {
        query:{
            slug: to.params.hero
        }
    })
    if(data.value.length < 1){
        return navigateTo('/');
    }
    return;
})
