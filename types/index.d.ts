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
}