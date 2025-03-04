<script setup lang="ts">
const runtime = useRuntimeConfig();
const { skins } = defineProps<{skins: skinsQuery[]}>();
const selected = ref<skinsQuery | null>();
const selectedIndex = ref<number | null>();
const colorMap: {[key :number]: string} = {
    1: 'border-b-[#b1c0c9]',
    2: 'border-b-[#75b1dd]',
    3: 'border-b-[#c784ff]',
    4: 'border-b-[#f6a638]',
    5: 'border-b-[#f65a50]'
}
const selectedCol = "bg-slate-800";
const notSelectedCol = "bg-slate-900/50";

useSeoMeta({
    title: ()=>(selected.value ? `${selected.value?.skin_name} - ${selected.value.hero_name}` : skins[0].hero_name),
    ogTitle: ()=>(selected.value ? `${selected.value?.skin_name} - ${selected.value.hero_name}` : skins[0].hero_name),
    description: ()=>(selected.value ? `Marvel Rivals ${selected.value.skin_name} skin for ${selected.value.hero_name} - ${selected.value?.skin_desc}` : `Browse skins for ${skins[0].hero_name} in Marvel Rivals!`),
    ogDescription: ()=>(selected.value ? `Marvel Rivals ${selected.value.skin_name} skin for ${selected.value.hero_name}!` : `Browse skins for ${skins[0].hero_name} in Marvel Rivals!`),
    ogImage: ()=>(selected.value ? `${runtime.public.cloudflare}/skins/icon/${selected.value.hero_id}${selected.value.skin_id}.webp` : `${runtime.public.cloudflare}/icon/${skins[0].hero_id}.webp`)
})

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

const handleUrlQuery = ()=>{
    const route = useRoute();
    const skinUrl = route.query.skin as string;
    if(skinUrl){
        const urlIndex = skins.findIndex(skin => skin.skin_id == Number(skinUrl));
        selectedIndex.value = urlIndex;
        selected.value = skins[urlIndex];
    }
    else{
        selectedIndex.value = null;
        selected.value = null;
    }
}

handleUrlQuery();

watch(useRoute(), ()=>{
    handleUrlQuery();
})

</script>
<template>
<div id="container" class="flex justify-center items-center relative select-none">
    <NuxtImg :src="`${runtime.public.cloudflare}/herobg/${skins[0].hero_id}.webp`" draggable="false" class="invisible sm:visible absolute bottom-0 left-0 h-full object-cover z-1"/>
    <div class="flex flex-col-reverse sm:flex-row justify-center w-full h-full sm:h-auto sm:w-auto sm:max-h-full z-10 m-0 sm:m-4">
        <!-- SKIN SELECTION -->
        <div class="flex flex-col basis-1/3 sm:basis-auto text-white gap-2 text-2xl sm:text-lg lg:text-2xl font-[Teko] uppercase bg-slate-900/40 w-full sm:w-[226px] lg:w-[310px] rounded-l-md overflow-y-auto">
            <div v-if="skins.length>0" :class="`flex flex-row items-center justify-start cursor-pointer gap-2 bg-slate-800 border-b-4 border-b-rarity-1 rounded-l-md overflow-hidden sm:h-[48px] lg:h-[64px] flex-shrink-0 ${selectedIndex == null ? selectedCol : notSelectedCol}`" @click="handleSelect(null)">
                <NuxtImg :src="`${runtime.public.cloudflare}/icon/${skins[0].hero_id}.webp`" draggable="false" width="64" height="64" class="w-[64px] h-[64px] sm:w-[48px] sm:h-[48px] lg:w-[64px] lg:h-[64px] z-10" loading="lazy"/>
                <h3>{{"Base Skin"}}</h3>
            </div>
            <div v-for="(skin, index) in skins" :class="`flex flex-row items-center justify-start pr-4 cursor-pointer gap-2 bg-slate-800 border-b-4 rounded-l-md overflow-hidden sm:h-[48px] lg:h-[64px] flex-shrink-0 ${colorMap[skin.rarity]} ${index == selectedIndex ? selectedCol : notSelectedCol}`" @click="handleSelect(index)">
                <NuxtImg :src="`${runtime.public.cloudflare}/skins/icon/${skin.hero_id}${skin.skin_id}.webp`" draggable="false" width="64" height="64" class="w-[64px] h-[64px] sm:w-[48px] sm:h-[48px] lg:w-[64px] lg:h-[64px] z-10" loading="lazy"/>
                <h3 class="truncate">{{ skin.skin_name }}</h3>
            </div>
        </div>
        <!-- SELECTED SKIN -->
        <div class="flex flex-col basis-2/3 sm:basis-auto items-start bg-slate-800 text-white h-full sm:h-auto w-full sm:w-[362px] lg:w-[424px] 2xl:w-[497px] rounded-r-md z-20 overflow-y-auto">
            <NuxtImg v-if="selected" :src="`${runtime.public.cloudflare}/skins/fullbody/${selected.hero_id}${selected.skin_id}.webp`" width="684" height="684" draggable="false" class="self-center max-w-[370px] sm:max-w-full w-full" loading="eager"/>
            <NuxtImg v-else  :src="`${runtime.public.cloudflare}/fullbody/${skins[0].hero_id}.webp`" width="684" height="684" draggable="false" class="self-center max-w-[370px] sm:max-w-full w-full" loading="eager"/>
            <div class="flex truncate text-3xl sm:text-2xl lg:text-3xl 2xl:text-4xl uppercase font-[Teko] items-center px-4 mt-2 flex-shrink-0">
                <NuxtImg v-if="selected" :src="`${runtime.public.cloudflare}/common/rarity${selected.rarity}.webp`" width="32" height="32" class="sm:w-[24px] lg:w-[28px] 2xl:w-[32px]"/>
                <NuxtImg v-else :src="`${runtime.public.cloudflare}/common/rarity1.webp`" width="32" height="32" class="sm:w-[24px] lg:w-[28px] 2xl:w-[32px]"/>
                <h1>{{ selected ? selected.skin_name : "Base Skin" }}</h1>
            </div>
            <p class="mb-4 mt-2 mx-4 h-auto sm:h-[5lh] sm:text-xs lg:text-sm 2xl:text-base overflow-y-auto text-base flex-shrink-0">{{ selected?.skin_desc }}</p>
            <p class="mt-4 mx-4 h-auto sm:h-[2lh] sm:text-xs lg:text-sm 2xl:text-base overflow-y-auto text-base flex-shrink-0">{{ selected?.appearance }}</p>
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
#container{
    height:calc(100dvh - 3.5rem)
}
</style>