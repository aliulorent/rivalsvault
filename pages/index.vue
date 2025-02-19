<script setup lang="ts">
const {data} = await useFetch('/api/characters',{
  method: "get"
})
</script>
<template>
  <div class="bg-slate-900">
    <!-- <NuxtRouteAnnouncer /> -->
    <div class="flex flex-wrap">
      <HeroSelect v-for="entry in data" :char="entry"/>
    </div>
  </div>
</template>
