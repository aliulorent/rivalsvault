<script setup lang="ts">
const {data} = await useFetch('/api/d1')
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <h1>Hello Cloudflare!</h1>
    <div v-for="char in data">
        <h3>{{ char.name }}</h3>
        <NuxtImg provider="cloudflare" :src="char.image_path" loading="lazy"/>
    </div>
  </div>
</template>
