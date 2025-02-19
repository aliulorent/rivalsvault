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
    <div v-if="data && data.length>0">
        <SkinSelect :skins="data"/>
    </div>
</template>