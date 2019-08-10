import Toilet from "../../../models/Toilet";
import { openAllWeek, openAllWeekUntilNight } from '../../../utils/time'
import Season from "../../../models/Season";

export function fetchToilets(): Toilet[] {
    return [
        {
            latitude: 62.19765792,
            longitude: 6.12671611,
            price: 10,
            placement: "Ørsta rutebilstasjon",
            address: "Ørsta rutebilstasjon",
            openingHours: openAllWeekUntilNight,
            accessible: false,
            babycare: true,
            pissoir: false,
        },
        {
            latitude: 62.19814540,
            longitude: 6.12348249,
            price: 10,
            placement: "Vikeøyrane",
            address: "Vikeøyra renseanlegg",
            openingHours: openAllWeekUntilNight,
            accessible: false,
            babycare: false,
            pissoir: false,
        },
        {
            latitude: 62.18933883,
            longitude: 6.11864010,
            price: 10,
            placement: "Vekslet badestrand",
            address: "Voldavegen",
            openingHours: openAllWeekUntilNight,
            accessible: false,
            babycare: true,
            pissoir: false,
        },
        {
            latitude: 62.19168910,
            longitude: 6.04411133,
            price: 0,
            placement: "Hovdevatnet",
            address: "Ytrehovdevegen",
            openingHours: openAllWeek,
            accessible: false,
            babycare: false,
            pissoir: false,
            season: 'summer' as Season,
        },
        {
            latitude: 62.24726625,
            longitude: 5.97335265,
            price: 0,
            placement: "Rjåneset",
            address: "Rjåneset",
            openingHours: openAllWeek,
            accessible: false,
            babycare: false,
            pissoir: false,
            season: 'summer' as Season,
        },
        {
            latitude: 62.14897042,
            longitude: 6.23767401,
            price: 0,
            placement: "Vatnevatnet",
            address: "Fv43",
            openingHours: openAllWeek,
            accessible: false,
            babycare: false,
            pissoir: false,
            season: 'summer' as Season,
        },
    ].map(toilet => ({ ...toilet, commune: "Ørsta" }))
}