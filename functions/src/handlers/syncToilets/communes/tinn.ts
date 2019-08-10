import Toilet from "../../../models/Toilet";
import { openAllWeek } from '../../../utils/time'

export function fetchToilets(): Toilet[] {
    return [
        {
            latitude: 59.7967759,
            longitude: 10.8215861,
            price: 0,
            placement: "Sofiemyr",
            address: "Sam Eydes vei 68, 1412 Sofiemyr",
            openingHours: openAllWeek,
            accessible: false,
            babycare: true,
            pissoir: true,
        },
    ].map(toilet => ({ ...toilet, commune: "Tinn" }))
}