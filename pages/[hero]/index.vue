<script setup lang="ts">
definePageMeta({
    middleware:["slug-check"]
})
    const route = useRoute();
    const slug = route.params.hero;
    
</script>
<template>

</template>