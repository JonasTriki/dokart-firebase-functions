import Toilet from "../../../models/Toilet";
import { openAllWeek } from '../../../utils/time'

export function fetchToilets(): Toilet[] {
    return [
        {
            latitude: 62.26258845,
            longitude: 7.17141379,
            price: 0,
            placement: "Eidsdal ferjekai",
            address: "Eidsdal ferjekai",
            openingHours: openAllWeek,
            accessible: true,
            babycare: false,
            pissoir: false,
        },
        {
            latitude: 62.29770377,
            longitude: 7.26108868,
            price: 10,
            placement: "Valldal kai",
            address: "Valldal kai",
            openingHours: openAllWeek,
            accessible: false,
            babycare: false,
            pissoir: false,
        },
        {
            latitude: 62.28474294,
            longitude: 7.18672214,
            price: 0,
            placement: "Linge ferjekai",
            address: "Linge ferjekai",
            openingHours: openAllWeek,
            accessible: false,
            babycare: false,
            pissoir: false,
        },
    ].map(toilet => ({ ...toilet, commune: "Norddal" }))
}