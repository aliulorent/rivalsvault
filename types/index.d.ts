export { skinsQuery, charactersQuery, searchQuery }

declare global {
    type skinsQuery = {
        skin_id: number;
        hero_id: number;
        skin_name: string;
        skin_desc: string;
        appearance: string;
        rarity: number;
        hero_name: string;
        slug: string;
    }
    type charactersQuery = {
        hero_id: number;
        hero_name: string;
        slug: string;
    }
    type searchQuery = {
        skin_id: number;
        hero_id: number;
        skin_name: string;
        hero_name: string;
        slug: string;
    }
    type CookieConsent = {
        ad_user_data: 'granted' | 'denied',
        ad_personalization: 'granted' | 'denied',
        ad_storage: 'granted' | 'denied',
        analytics_storage: 'granted' | 'denied',
    }
}