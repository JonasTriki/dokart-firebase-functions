import Toilet from "../../../models/Toilet";
import { openAllWeek } from "../../../utils/time";

export function fetchToilets(): Toilet[] {
    return [
        {
            latitude: 59.237619,
            longitude: 6.180041,
            price: 0,
            placement: "Hjelmelandsvågen",
            address: "Hjelmelandsvågen",
            openingHours: openAllWeek,
            accessible: false,
            babycare: false,
            pissoir: false,
        },
    ].map(toilet => ({ ...toilet, commune: "Hjelmeland" }))
}