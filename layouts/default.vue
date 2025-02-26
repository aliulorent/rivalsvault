<script setup lang="ts">
const clickHandler = () =>{
    return navigateTo("/");
}
</script>
<template>
    <div id="navbar" class="w-full h-14 bg-slate-800 flex justify-between items-center text-white p-4 border-b-2 border-b-slate-950 fixed z-20">
        <div @click="clickHandler" class="flex gap-2 cursor-pointer">
            <div class="w-[64px]">
                <NuxtImg provider="cloudflare" :src="`/common/rivalslogo.webp`"/>
            </div>
            <h2 class="font-[Teko] font-[400] text-2xl">HUB</h2>
        </div>
    </div>
    <div id="background">
        <slot />
    </div>
</template>
<style>
#background{
    min-height:100%;
    background-image: url('https://cdn.rivalsvault.com/common/crystalbg.webp');
    background-attachment: fixed;
    background-position: center; 
    background-size:cover;
}
</style>