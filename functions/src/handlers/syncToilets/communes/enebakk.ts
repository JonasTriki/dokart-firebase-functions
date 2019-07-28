import Toilet from "../../../models/Toilet";
import { openAllWeek } from '../../../utils/time'

export function fetchToilets(): Toilet[] {
    return [
        {
            latitude: 59.7364295,
            longitude: 11.0175098,
            price: 0,
            placement: "Vik badeplass",
            address: "Vik badeplass",
            openingHours: openAllWeek,
            accessible: false,
            babycare: false,
            pissoir: false
        },
        {
            latitude: 59.7131523,
            longitude: 11.1383235,
            price: 0,
            placement: "Bermerud badeplass",
            address: "Bermerud badeplass",
            openingHours: openAllWeek,
            accessible: false,
            babycare: false,
            pissoir: false
        },
    ].map(toilet => ({
        ...toilet,
        commune: "Enebakk",
        season: 'summer'
    }))
}