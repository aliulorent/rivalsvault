<script setup lang="ts">

const {data} = await useFetch('/api/d1')
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <h1>Hello Cloudflare!</h1>
  </div>
</template>
