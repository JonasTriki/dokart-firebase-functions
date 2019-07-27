import OpeningHour from './OpeningHour'

export default interface Toilet {
    id?: string;
    latitude: number;
    longitude: number;
    price: number;
    placement: string;
    address: string;
    openingHours: {
        weekday: OpeningHour;
        saturday: OpeningHour;
        sunday: OpeningHour;
    }
    accessible: boolean;
    babycare: boolean;
    pissoir: boolean;
    commune: string;
}