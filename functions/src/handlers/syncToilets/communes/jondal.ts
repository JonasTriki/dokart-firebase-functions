import Toilet from "../../../models/Toilet";
import { openAllWeek } from '../../../utils/time'
import { utmToLatLng } from "../../../utils/location";

export function fetchToilets(): Toilet[] {
    return [
        {
            ...utmToLatLng(355182.09, 6692495.62, 32),
            price: 0,
            placement: "Herand kiosk",
            address: "Herandsvegen 310",
            openingHours: openAllWeek,
            accessible: false,
            babycare: true,
            pissoir: false
        },
        {
            ...utmToLatLng(353018.82, 6690954.51, 32),
            price: 0,
            placement: "Hereiane",
            address: "Grensa Svåsandsvegen/Herandsvegen",
            openingHours: openAllWeek,
            accessible: false,
            babycare: true,
            pissoir: true,
        },
        {
            ...utmToLatLng(347909.91, 6685855.86, 32),
            price: 0,
            placement: "Vikefjøra (badehus på strand)",
            address: "Vikefjøra",
            openingHours: openAllWeek,
            accessible: false,
            babycare: true,
            pissoir: true,
        },
        {
            ...utmToLatLng(347985.09, 6685316.60, 32),
            price: 0,
            placement: "Matkanten",
            address: "Jondal sentrum, ferjekaien",
            openingHours: openAllWeek,
            accessible: false,
            babycare: true,
            pissoir: true,
        },
        {
            ...utmToLatLng(347046.91, 6684855.15, 32),
            price: 0,
            placement: "Djupevik (badehus på strand)",
            address: "Nedre Sætveithagen 18",
            openingHours: openAllWeek,
            accessible: false,
            babycare: true,
            pissoir: true,
        },
    ].map(toilet => ({ ...toilet, commune: "Jondal" }))
}