import Toilet from "../../../models/Toilet";
import Season from "../../../models/Season";
import { openAllWeek } from '../../../utils/time'

export function fetchToilets(): Toilet[] {
    return [
        {
            latitude: 61.87284,
            longitude: 10.19435,
            price: 0,
            placement: "Atnasjø kafe",
            address: "Atnasjø kafe",
            openingHours: openAllWeek,
            accessible: true,
            babycare: false,
            pissoir: false,
        },
        {
            latitude: 61.83399,
            longitude: 10.23792,
            price: 0,
            placement: "Rondane Friluftssenter",
            address: "Rondane Friluftssenter",
            openingHours: openAllWeek,
            accessible: false,
            babycare: false,
            pissoir: false,
        },
        {
            latitude: 61.66784,
            longitude: 10.88476,
            price: 0,
            placement: "Storelgen",
            address: "Storelgen",
            openingHours: openAllWeek,
            accessible: false,
            babycare: false,
            pissoir: false,
        },
        {
            latitude: 61.56421,
            longitude: 11.08846,
            price: 0,
            placement: "Kjemsjøen badeplass",
            address: "Kjemsjøen badeplass",
            openingHours: openAllWeek,
            accessible: false,
            babycare: false,
            pissoir: false,
            season: "summer" as Season,
        },
    ].map(toilet => ({ ...toilet, commune: "Stor-Elvdal" }))
}