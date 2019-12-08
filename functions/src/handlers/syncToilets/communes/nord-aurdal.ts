import Toilet from "../../../models/Toilet";
import { openAllWeek } from "../../../utils/time";
import Season from "../../../models/Season";

export function fetchToilets(): Toilet[] {
    return [
        {
            latitude: 60.9853478,
            longitude: 9.2327034,
            price: 0,
            placement: "Fagernes",
            address: "Jernbanevegen 8",
            openingHours: openAllWeek,
            accessible: true,
            babycare: false,
            pissoir: false,
            season: "summer" as Season,
        },
    ].map(toilet => ({ ...toilet, commune: "Nord-Aurdal" }))
}