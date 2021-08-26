import Toilet from "../../../models/Toilet";
import { openAllWeek } from "../../../utils/time";

export function fetchToilets(): Toilet[] {
  return [
    {
      latitude: 61.52986,
      longitude: 10.13962,
      price: 0,
      placement: "Vålebrua",
      address: "Jernbanegata 1",
      openingHours: openAllWeek,
      accessible: false,
      babycare: false,
      pissoir: true,
    },
  ].map((toilet) => ({ ...toilet, commune: "Ringebu" }));
}
