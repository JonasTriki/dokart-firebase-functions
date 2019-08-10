import Toilet from "../../../models/Toilet";
import { openAllWeek, closed } from '../../../utils/time'
import { utmToLatLng } from "../../../utils/location";

export function fetchToilets(): Toilet[] {
    return [
        {
            ...utmToLatLng(464367, 6718170, 32),
            price: 0,
            placement: "Hagafoss",
            address: "Mogrendvegen",
            openingHours: openAllWeek,
            accessible: true,
            babycare: false,
            pissoir: false
        },
        {
            ...utmToLatLng(456442, 6711124, 32),
            price: 0,
            placement: "Gågate Geilo",
            address: "Vesleslåttvegen 23",
            openingHours: openAllWeek,
            accessible: true,
            babycare: true,
            pissoir: true
        },
        {
            ...utmToLatLng(461601, 6720175, 32),
            price: 0,
            placement: "Hol sentrum",
            address: "Ålmannvegen 4",
            openingHours: {
                weekday: { from: "09:00", to: "17:00" },
                saturday: closed,
                sunday: closed,
            },
            accessible: false,
            babycare: false,
            pissoir: false
        },
        {
            ...utmToLatLng(453669, 6721045, 32),
            price: 0,
            placement: "Coop marked Hovet",
            address: "Håkonsetgutu 1A",
            openingHours: {
                weekday: { from: "10:00", to: "20:00" },
                saturday: { from: "10:00", to: "18:00" },
                sunday: closed,
            },
            accessible: false,
            babycare: false,
            pissoir: false
        },
        {
            ...utmToLatLng(469161, 6696891, 32),
            price: 0,
            placement: "Rasteplass Dagali",
            address: "Fv 40 Dagali",
            openingHours: openAllWeek,
            accessible: false,
            babycare: false,
            pissoir: false
        },
    ].map(toilet => ({ ...toilet, commune: "Hol" }))
}