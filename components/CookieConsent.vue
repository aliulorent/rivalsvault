<script setup lang="ts">
const runtime = useRuntimeConfig();

const cookieConsent = useCookie<CookieConsent | null>('cookieConsent', {
  sameSite:'lax',
  maxAge:60 * 60 * 24 * 365
});
const consentClosed = ref(cookieConsent.value != null ? true : false);
const userConsent = ref<CookieConsent>({
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'ad_storage': 'denied',
      'analytics_storage': 'denied'
});

const parseCookieConsent = () =>{
  if(cookieConsent && cookieConsent.value){
    let object;
    try{
      // object = JSON.parse(cookieConsent.value);
      object = cookieConsent.value
    }
    catch(e){
      // console.log(e);
      cookieConsent.value = null;
      consentClosed.value = false;
      return
    }
    if('ad_user_data' in object && 'ad_personalization' in object && 'ad_storage' in object && 'analytics_storage' in object){
      userConsent.value = {
        ad_user_data: object.ad_user_data || 'denied',
        ad_personalization: object.ad_personalization || 'denied',
        ad_storage: object.ad_storage || 'denied',
        analytics_storage: object.analytics_storage || 'denied'
      }
      consentClosed.value = true;
    }
  }
}

const setCookieConsent = ()=>{
  // cookieConsent.value = JSON.stringify(userConsent.value);
  cookieConsent.value = userConsent.value
}

const gtm = useScriptGoogleTagManager({
  id: runtime.public.gtmId,
  onBeforeGtmStart: ((gtag)=>{
    parseCookieConsent();
    gtag('consent', 'default', {
    'ad_user_data': userConsent.value.ad_user_data,
    'ad_personalization': userConsent.value.ad_personalization,
    'ad_storage': userConsent.value.ad_storage,
    'analytics_storage': userConsent.value.analytics_storage,
    'wait_for_update': 500,
    })
  })
})

const pushConsent = () =>{
  gtm.dataLayer.push(["consent", "update", userConsent.value])
};

const acceptAllCookies = () =>{
  userConsent.value = {
    ad_user_data:'granted',
    ad_personalization: 'granted',
    ad_storage: 'granted',
      analytics_storage: 'granted'
  }
  pushConsent();
  setCookieConsent();
  consentClosed.value = true;
}

const adUserData = ref<boolean>(true);
const adPersonalization = ref<boolean>(true);
const adStorage = ref<boolean>(true);
const analyticsStorage = ref<boolean>(true);

const acceptSelectedCookies = () => {
  userConsent.value = {
    ad_user_data: adUserData.value ? 'granted' : 'denied',
    ad_personalization: adPersonalization.value ? 'granted' : 'denied',
    ad_storage: adStorage.value ? 'granted' : 'denied',
    analytics_storage: analyticsStorage.value ? 'granted' : 'denied',
  }
  pushConsent();
  setCookieConsent();
  consentClosed.value = true;
};

const declineCookies = () => {
  userConsent.value = {
    ad_user_data:'denied',
    ad_personalization: 'denied',
    ad_storage: 'denied',
    analytics_storage: 'denied'
  }
  pushConsent();
  setCookieConsent();
  consentClosed.value = true;
};

</script>
<template>
    <div v-if="!consentClosed" class="cookie-consent fixed bottom-16 right-2 p-4 bg-text-50 z-50 max-w-[460px] rounded-md border-2 border-background-900 text-xs sm:text-base">
      <div class="">
        We use cookies to ensure you get the best experience on our website.
        <NuxtLink :to="`/cookie-policy`" class="text-primary-600 underline">Learn more</NuxtLink>
      </div>
      <div class="flex justify-between sm:text-xs">
        <div class="flex items-center">
          <label for="userdata">Ad User Data</label>
          <input type="checkbox" id="userdata" v-model="adUserData"/>
        </div>
        <div class="flex items-center">
          <label for="personalization">Ad Personalization</label>
          <input type="checkbox" id="personalization" v-model="adPersonalization"/>
        </div>
        <div class="flex items-center">
          <label for="storage">Ad Storage</label>
          <input type="checkbox" id="storage" v-model="adStorage"/>
        </div>
        <div class="flex items-center">
          <label for="analytics">Analytics Storage</label>
          <input type="checkbox" id="analytics" v-model="analyticsStorage"/>
        </div>
      </div>
      <div class="flex gap-2 mt-2 text-text-50">
        <button @click="acceptAllCookies" class="bg-primary-600 p-2 rounded-md">Accept All</button>
        <button @click="acceptSelectedCookies" class="bg-primary-600 p-2 rounded-md">Accept Selected</button>
        <button @click="declineCookies" class="bg-secondary-600 p-2 rounded-md">Decline All</button>
      </div>
    </div>
</template>
<style>
label{
  margin: 0.25rem;
}
</style>