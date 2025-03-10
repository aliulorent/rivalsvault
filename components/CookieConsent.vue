<script setup lang="ts">
const runtime = useRuntimeConfig();

const cookieConsent = useCookie<string | null>('cookieConsent', {
  sameSite:'lax',
  maxAge:60 * 60 * 24 * 365
});
const consentClosed = ref(cookieConsent.value === 'accepted' ? true : false);
const gtm = useScriptGoogleTagManager({
  id: runtime.public.gtmId,
  onBeforeGtmStart: ((gtag)=>{
    gtag('consent', 'default', {
    'ad_user_data': cookieConsent.value === 'accepted' ? 'granted' :'denied',
    'ad_personalization': cookieConsent.value === 'accepted' ? 'granted' :'denied',
    'ad_storage': cookieConsent.value === 'accepted' ? 'granted' :'denied',
    'analytics_storage': cookieConsent.value === 'accepted' ? 'granted' :'denied',
    'wait_for_update': 500,
    })
  })
})

const grantConsent = () =>{
  console.log("Pushing consent update")
  gtm.dataLayer.push(["consent", "update", {
    'ad_user_data': 'granted',
    'ad_personalization': 'granted',
    'ad_storage': 'granted',
    'analytics_storage': 'granted',
  }])
  console.log("Pushed")
};

const acceptCookies = () => {
    cookieConsent.value = 'accepted'
    consentClosed.value = true;
    grantConsent();
};

const declineCookies = () => {
    cookieConsent.value = null; // Setting cookie to null removes the cookie
    consentClosed.value = true; // Close the popup for this session
};

</script>
<template>
    <div v-if="!consentClosed" class="cookie-consent fixed bottom-16 right-2 p-4 bg-text-50 z-50 max-w-[360px] rounded-md border-2 border-background-900 text-xs sm:text-base">
      <div class="">
        We use cookies to ensure you get the best experience on our website.
        <NuxtLink :to="`/privacy-policy`" class="text-primary-600 underline">Learn more</NuxtLink>
      </div>
      <div class="flex gap-2 mt-2 text-text-50">
        <button @click="acceptCookies" class="bg-primary-600 p-2 rounded-md">Accept</button>
        <button @click="declineCookies" class="bg-secondary-600 p-2 rounded-md">Decline</button>
      </div>
    </div>
</template>