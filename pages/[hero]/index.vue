<script setup lang="ts">

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
    <SkinSelect v-if="data && data.length>0" :skins="data"/>
    <NotFound v-else/>
</template>