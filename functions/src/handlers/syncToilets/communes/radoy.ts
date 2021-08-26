import Toilet from "../../../models/Toilet";
import { openAllWeek } from "../../../utils/time";
import { utmToLatLng } from "../../../utils/location";

export function fetchToilets(): Toilet[] {
  return [
    {
      ...utmToLatLng(277355, 6735187, 32),
      price: 0,
      placement: "Byngja",
      address: "Byngja",
      openingHours: openAllWeek,
      accessible: false,
      babycare: false,
      pissoir: false,
    },
    {
      ...utmToLatLng(290561, 6726926, 32),
      price: 0,
      placement: "Solheimsvika",
      address: "Solheimsvika",
      openingHours: openAllWeek,
      accessible: false,
      babycare: false,
      pissoir: false,
    },
    {
      ...utmToLatLng(283729, 6728837, 32),
      price: 0,
      placement: "Nesvatnet",
      address: "Nesvatnet",
      openingHours: openAllWeek,
      accessible: true,
      babycare: false,
      pissoir: false,
    },
  ].map((toilet) => ({ ...toilet, commune: "Radøy" }));
}
