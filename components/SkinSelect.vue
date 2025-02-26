<script setup lang="ts">
const runtime = useRuntimeConfig();
const { skins } = defineProps(['skins']);
const selected = ref();
const selectedIndex = ref();
const colorMap = {
    1: 'border-b-[#b1c0c9]',
    2: 'border-b-[#75b1dd]',
    3: 'border-b-[#c784ff]',
    4: 'border-b-[#f6a638]',
    5: 'border-b-[#f65a50]'
}
const handleSelect = (index: number | null) =>{
    if(index!=null){
        selected.value = skins[index];
        useRouter().push({query:{"skin":skins[index].skin_id}});
    }
    else{
        selected.value = null;
        useRouter().push({query:{}});
    }
    selectedIndex.value = index;
}
const selectedCol = "bg-slate-800";
const notSelectedCol = "bg-slate-900/50";

const handleUrlQuery = ()=>{
    const skinUrl = useRoute().query.skin;
    if(skinUrl){
        const urlIndex = skins.findIndex(skin => skin.skin_id == skinUrl);
        selectedIndex.value = urlIndex;
        selected.value = skins[urlIndex];
    }
}

handleUrlQuery();
</script>
<template>
<div class="h-dvh pt-14 flex justify-center items-center relative select-none">
    <NuxtImg provider="cloudflare" :src="`/herobg/${skins[0].hero_id}.webp`" draggable="false" class="absolute bottom-0 left-0 h-full z-1"/>
    <!-- <NuxtImg provider="cloudflare" :src="`/logo/${skins[0].hero_id}.webp`" draggable="false" class="absolute right-0 bottom-0 opacity-50 z-1"/> -->
    <div class="flex flex-row justify-center z-10">
        <!-- SKIN SELECTION -->
        <div class="flex flex-col text-white gap-2 text-2xl font-[Teko] uppercase bg-slate-900/40 rounded-l-md">
            <div v-if="skins.length>0" :class="`flex flex-row items-center justify-start min-w-[310px] cursor-pointer gap-2 bg-slate-800 border-b-4 border-b-rarity-1 rounded-l-md overflow-hidden ${selectedIndex == null ? selectedCol : notSelectedCol}`" @click="handleSelect(null)">
                <NuxtImg provider="cloudflare" :src="`/icon/${skins[0].hero_id}.webp`" draggable="false" class="w-[64px] h-[64px] z-10" loading="lazy"/>
                <h3>{{"Base Skin"}}</h3>
            </div>
            <div v-for="(skin, index) in skins" :class="`flex flex-row items-center justify-start pr-4 min-w-[310px] cursor-pointer gap-2 bg-slate-800 border-b-4 rounded-l-md overflow-hidden ${colorMap[skin.rarity]} ${index == selectedIndex ? selectedCol : notSelectedCol}`" @click="handleSelect(index)">
                <NuxtImg provider="cloudflare" :src="`/skins/icon/${skin.hero_id}${skin.skin_id}.webp`" draggable="false" class="w-[64px] h-[64px] z-10" loading="lazy"/>
                <h3>{{ skin.skin_name }}</h3>
            </div>
        </div>
        <!-- SELECTED SKIN -->
        <div class="flex flex-col items-start bg-slate-800 text-white w-[50%] max-w-[684px] max-h-screen rounded-r-md z-20">
            <NuxtImg v-if="selected" :src="`${runtime.public.cloudflare}/skins/fullbody/${selected.hero_id}${selected.skin_id}.webp`" width="684" height="684" draggable="false" class="w-full" loading="eager"/>
            <NuxtImg v-else  :src="`${runtime.public.cloudflare}/fullbody/${skins[0].hero_id}.webp`" width="684" height="684" draggable="false" class="w-full" loading="eager"/>
            <hr>
            <div class="flex text-4xl uppercase font-[Teko] items-center px-4 mt-2">
                <NuxtImg v-if="selected" provider="cloudflare" :src="`/common/rarity${selected.rarity}.webp`"/>
                <NuxtImg v-else provider="cloudflare" :src="`/common/rarity1.webp`"/>
                <h1>{{ selected ? selected.skin_name : "Base Skin" }}</h1>
            </div>
            <p class="my-2 px-4 py-2 h-[5lh] overflow-y-auto text-base">{{ selected?.skin_desc }}</p>
            <p class="my-2 px-4 py-2 h-[2lh] overflow-y-auto text-base">{{ selected?.appearance }}</p>
        </div>
    </div>
</div>
</template>
<style>
p {
    font-family: "Nunito Sans", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-variation-settings:
        "wdth" 100,
        "YTLC" 500;
}
</style>