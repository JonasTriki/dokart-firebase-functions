import Toilet from "../../../models/Toilet";

export function fetchToilets(): Toilet[] {
  return [
    {
      latitude: 63.4002606,
      longitude: 9.5005816,
      price: 0,
      placement: "Krokstadøra",
      address: "Krokstadøra",
      openingHours: {
        weekday: { from: "09:00", to: "15:00" },
        saturday: { from: "09:00", to: "15:00" },
        sunday: { from: "09:00", to: "15:00" },
      },
      accessible: false,
      babycare: false,
      pissoir: false,
    },
  ].map((toilet) => ({ ...toilet, commune: "Snillfjord" }));
}
