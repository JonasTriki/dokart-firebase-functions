import Toilet from "../../../models/Toilet";
import { openAllWeek } from '../../../utils/time'

export function fetchToilets(): Toilet[] {
    return [
        {
            latitude: 63.97441,
            longitude: 11.29219,
            price: 0,
            placement: "Stornesøra friområde",
            address: "Stornesvegen 93",
            openingHours: openAllWeek,
            accessible: false,
            babycare: false,
            pissoir: false,
        },
        {
            latitude: 63.86490,
            longitude: 11.29752,
            price: 0,
            placement: "Sundsand friområde",
            address: "Sundsandvegen 13",
            openingHours: openAllWeek,
            accessible: false,
            babycare: false,
            pissoir: false,
        },
        {
            latitude: 63.87197,
            longitude: 11.29484,
            price: 0,
            placement: "Muustrøparken",
            address: "Muustrøa 4 7670",
            openingHours: openAllWeek,
            accessible: false,
            babycare: false,
            pissoir: false,
        },
    ].map(toilet => ({ ...toilet, commune: "Inderøy", season: 'summer' }))
}