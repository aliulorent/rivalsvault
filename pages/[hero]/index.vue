<script setup lang="ts">
definePageMeta({
    // middleware:["slug-check"]
})
    const route = useRoute();
    const slug = route.params.hero;
    const {data} = await useFetch('/api/skins', {
        method: "get",
        query:{
            slug: slug
        }
    })
</script>
<template>
    <!-- <div v-if="data && data.length>0" class="skins-container h-screen pt-14 flex justify-center items-center"> -->
        <SkinSelect v-if="data && data.length>0" :skins="data"/>
        <NotFound v-else/>
    <!-- </div> -->
</template>