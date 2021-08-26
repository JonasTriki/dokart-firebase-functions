import Toilet from "../../../models/Toilet";

export function fetchToilets(): Toilet[] {
  return [
    {
      latitude: 62.3599227,
      longitude: 6.0665733,
      price: 0,
      placement: "Ovrasanden",
      address: "Ovrasanden",
      openingHours: {
        weekday: { from: "08:00", to: "22:00" },
        saturday: { from: "08:00", to: "22:00" },
        sunday: { from: "08:00", to: "22:00" },
      },
      accessible: false,
      babycare: false,
      pissoir: false,
    },
  ].map((toilet) => ({ ...toilet, commune: "Hareid" }));
}
