import { fetchToilets as fetchDifiToilets } from "../../../utils/difiCity";
import { parseOpeningHour } from "../../../utils/time";
import Toilet from "../../../models/Toilet";

interface BergenToilet {
  herre: string;
  tid_sondag: string;
  pissoir_only: string;
  stellerom: string;
  latitude: string;
  tid_hverdag: string;
  plassering: string;
  tid_lordag: string;
  rullestol: string;
  adresse: string;
  pris: string;
  id: string;
  place: string;
  dame: string;
  longitude: string;
}

async function fetchBergenToilets() {
  return fetchDifiToilets<BergenToilet>("/api/json/bergen/dokart");
}

export async function fetchToilets(): Promise<Toilet[]> {
  const toilets = await fetchBergenToilets();
  return toilets.map((toilet) => ({
    latitude: parseFloat(toilet.latitude),
    longitude: parseFloat(toilet.longitude),
    price: toilet.pris !== "NULL" ? parseInt(toilet.pris) : 0,
    placement: toilet.plassering.replace(" , ", ",").trim(),
    address: toilet.adresse.trim(),
    openingHours: {
      weekday: parseOpeningHour(toilet.tid_hverdag),
      saturday: parseOpeningHour(toilet.tid_lordag),
      sunday: parseOpeningHour(toilet.tid_sondag),
    },
    accessible: toilet.rullestol === "1",
    babycare: toilet.stellerom === "1",
    pissoir: toilet.pissoir_only === "1",
    commune: "Bergen",
  }));
}
