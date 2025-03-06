<script setup lang="ts">
const clickHandler = () =>{
    return navigateTo("/");
}
</script>
<template>
    <div id="navbar" class="w-full h-14 bg-background-900 flex justify-between items-center text-text-50 p-4 border-b-2 border-b-background-950 fixed top-0 z-20">
    <div @click="clickHandler" class="flex gap-2 cursor-pointer">
        <div class="w-[64px]">
            <NuxtImg provider="cloudflare" :src="`/common/rivalslogo.webp`"/>
        </div>
        <h2 class="font-[Teko] font-[400] text-2xl">VAULT</h2>
    </div>
    <div>
        <SearchField/>
    </div>
    </div>
    <div id="background" class="overflow-auto pt-14 bg-background-800">
        <slot />
        <div id="footer" class="h-12 p-4 flex justify-between items-center gap-4 bg-background-900 text-text-50 text-sm box-border">
        <p class="truncate">© 2025 NetEase Games. All rights reserved. Marvel Rivals and all related assets are the property of NetEase Games and/or their respective owners. Rivals Vault is not affiliated with NetEase Games or Marvel.</p>
        <div class="flex items-center gap-4">
            <NuxtLink to="/privacy" class="justify-self-end">
                <p>Privacy Policy</p>
            </NuxtLink>
            <NuxtLink to="/cookies" class="justify-self-end">
                <p>Cookies Policy</p>
            </NuxtLink>
        </div>
    </div>
    </div>
</template>
<style>
#background{
    min-height:calc(100dvh);
    background-image: url('https://cdn.rivalsvault.com/common/crystalbg.webp');
    background-attachment: fixed;
    background-position: center; 
    background-size:cover;
}
</style>