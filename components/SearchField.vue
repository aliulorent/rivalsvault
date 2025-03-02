<script setup lang="ts">
const runtime = useRuntimeConfig();
const inputField = ref<string>("");
const results = ref<searchQuery[]>([]);
const isFocused = ref<boolean>(false);
const isLoading = ref<boolean>(false);
watch(inputField, ()=>{
    debouncedSearch();
})
const debouncedSearch = useDebounceFn(async ()=>{
    if(inputField.value?.length > 2){
        isLoading.value = true;
        const data = await $fetch('/api/search', {
            method:'get',
            query:{
                input: inputField.value
            }
        })
        results.value = data;
        isLoading.value = false;
    }
    else{
        results.value = [];
    }
}, 250, { maxWait: 1000});

const handleClick = async (skin: searchQuery) =>{
    console.log("Navigated")
    await navigateTo(`${skin.slug}?skin=${skin.skin_id}`)
    isFocused.value = false;
}

const handleClickOutside = (event: MouseEvent) => {
  const searchBar = document.getElementById("searchBar")
  const searchResults = document.getElementById("searchResults")
  if (
    searchBar && searchResults && event.target instanceof Node && !searchBar.contains(event.target) && !searchResults.contains(event.target)
  ) {
    isFocused.value = false
  }
}
onMounted(() => {
  document.addEventListener("click", handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside)
})
</script>
<template>
    <div class="relative w-[360px] text-black font-[Teko] text-xl">
        <input id="searchBar" type="search" v-model="inputField" @focus="isFocused = true" placeholder="Search Skins" class="px-2 pt-1 rounded-md w-full">
        <div v-if="isLoading" class="absolute w-full top-full left-0 bg-white mt-2 rounded-md z-20">
                <h3 class="px-2">Loading...</h3>
        </div>
        <div id="searchResults" v-show="isFocused && results.length > 0" class="absolute w-full top-full left-0 bg-white flex flex-col overflow-y-auto max-h-48 mt-2 rounded-md z-20">
            <div v-for="result in results" class="flex-shrink-0 flex items-center hover:bg-gray-300 cursor-pointer" @click="handleClick(result)">
                <NuxtImg :src="`${runtime.public.cloudflare}/skins/icon/${result.hero_id}${result.skin_id}.webp`" draggable="false" width="64" height="64" class="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] lg:w-[36px] lg:h-[36px] z-10" loading="lazy"/>
                <h3 class="truncate uppercase pl-1">{{ result.skin_name }}</h3>
            </div>
        </div>
    </div>
</template>
<style>

</style>