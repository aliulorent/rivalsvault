<script setup lang="ts">
const {data} = await useFetch('/api/d1')
</script>
<template>
  <div class="bg-slate-200">
    <NuxtRouteAnnouncer />
    <h1>Hello Cloudflare!</h1>
    <div class="flex flex-wrap">
      <HeroSelect v-for="entry in data" :char="entry"/>
    </div>
  </div>
</template>
