<script setup lang="ts">
const runtime = useRuntimeConfig();
const modalVisibility = ref<boolean>(true);
const clickHandler = async () =>{
    return await navigateTo("/");
}
</script>
<template>
    <div id="navbar" class="w-full h-14 bg-background-900 flex justify-between items-center text-text-50 p-4 border-b-2 border-b-background-900 fixed top-0 z-20">
    <div @click="clickHandler" class="flex items-center gap-1 cursor-pointer flex-shrink-0">
        <NuxtImg :src="`${runtime.public.cloudflare}/common/rivalsvaultlogosmall.webp`" width="256" height="256" class="w-[48px] h-[48px] flex-shrink-0"/>
        <h2 class="font-[Teko] font-[400] invisible sm:visible text-xl sm:text-3xl">Rivals <span class="text-secondary-500">Vault</span></h2>
    </div>
    <div>
        <SearchField/>
    </div>
    </div>
    <div id="background" class="overflow-auto pt-14 bg-background-800 relative">
        <CookieConsent/>
        <slot />
        <div id="footer" class="h-12 p-4 flex justify-between items-center gap-4 bg-background-900 text-text-50 text-sm box-border">
        <p class="truncate">© 2025 NetEase Games. All rights reserved. Marvel Rivals and all related assets are the property of NetEase Games and/or their respective owners. Rivals Vault is not affiliated with NetEase Games or Marvel.</p>
        <div class="flex items-center gap-4">
            <NuxtLink to="/privacy-policy" class="justify-self-end">
                <p>Privacy Policy</p>
            </NuxtLink>
            <NuxtLink to="/cookie-policy" class="justify-self-end">
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