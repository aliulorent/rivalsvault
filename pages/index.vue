<script setup lang="ts">

const {data} = await useFetch('/api/characters',{
  method: "get"
})

useSeoMeta({
    title: "Browse Skins",
    ogTitle: "Browse Skins",
    description: "Browse all Hero Skins for Marvel Rivals!",
    ogDescription: "Browse all Hero Skins for Marvel Rivals!",
    ogType:"website",
})

</script>
<template>
    <div class="min-h-full">
      <h1 class="font-[Teko] text-2xl mt-2 lg:text-3xl xl:text-4xl w-full text-center text-white">View Marvel Rivals skins by Hero</h1>
      <div class="flex justify-center flex-wrap">
        <HeroSelect v-for="entry in data" :char="entry"/>
      </div>
    </div>
</template>
