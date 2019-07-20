export interface OpeningHour {
    from: string;
    to: string;
}

export default interface Toilet {
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
}