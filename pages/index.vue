<script setup lang="ts">

const {data} = await useFetch('/api/characters',{
  method: "get"
})
</script>
<template>
    <div class="min-h-full pt-20">
      <h1 class="font-[Teko] font-[600] text-2xl lg:text-3xl xl:text-4xl w-full text-center text-white">Search skins by Hero</h1>
      <div class="flex justify-center flex-wrap">
        <HeroSelect v-for="entry in data" :char="entry"/>
      </div>
    </div>
</template>
