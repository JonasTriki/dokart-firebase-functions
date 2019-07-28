import Toilet from "../../../models/Toilet";
import { openAllWeek } from '../../../utils/time'

export function fetchToilets(): Toilet[] {
    return [
        {
            latitude: 59.21242,
            longitude: 7.53521,
            price: 0,
            placement: "Sæbyggjen",
            address: "Nordibøvegen 141, 4747 Valle",
            openingHours: openAllWeek,
            accessible: true,
            babycare: false,
            pissoir: false,
        },
        {
            latitude: 59.21191,
            longitude: 7.53305,
            price: 0,
            placement: "Legekontoret i Valle",
            address: "Kjellebergsvegen 3, 4747 Valle",
            openingHours: openAllWeek,
            accessible: false,
            babycare: false,
            pissoir: false,
        },
        {
            latitude: 59.09653,
            longitude: 7.52883,
            price: 0,
            placement: "Rysstad sentrum",
            address: "Stovegen 11, 4748 Rysstad",
            openingHours: openAllWeek,
            accessible: true,
            babycare: true,
            pissoir: true,
        },
    ].map(toilet => ({ ...toilet, commune: "Valle" }))
}