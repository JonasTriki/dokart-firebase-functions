import Toilet from "./Toilet"

export default interface City {
    id: string;
    name: string;
    toilets: Toilet[];
}