<script setup lang="ts">
const inputField = ref<string>("");
const results = ref<searchQuery[]>();
watch(inputField, ()=>{
    debouncedSearch();
})
const debouncedSearch = useDebounceFn(async ()=>{
    if(inputField.value?.length > 2){
        const data = await $fetch('/api/search', {
            method:'get',
            query:{
                input: inputField.value
            }
        })
        results.value = data;
    }
}, 500, { maxWait: 3000});
</script>
<template>
    <input type="search" v-model="inputField" placeholder="Search Skins" class="text-black px-2 rounded-md">
</template>