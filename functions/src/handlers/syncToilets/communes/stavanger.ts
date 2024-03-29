import { fetchToilets as fetchDifiToilets } from "../../../utils/difiCity";
import { parseOpeningHour } from "../../../utils/time";
import Toilet from "../../../models/Toilet";

interface StavangerToilet {
  plassering: string;
  aapningstider_soendag: string;
  rullestol: string;
  stellerom: string;
  latitude: string;
  adresse: string;
  pris: string;
  aapningstider_hverdag: string;
  aapningstider_loerdag: string;
  longitude: string;
}

export async function fetchStavangerToilets(): Promise<StavangerToilet[]> {
  return fetchDifiToilets<StavangerToilet>(
    "/api/json/stavanger/offentligetoalett"
  );
}

export async function fetchToilets(): Promise<Toilet[]> {
  const toilets = await fetchStavangerToilets();
  return toilets.map((toilet) => ({
    latitude: parseFloat(toilet.latitude),
    longitude: parseFloat(toilet.longitude),
    price: parseInt(toilet.pris),
    placement: toilet.plassering,
    address: toilet.adresse,
    openingHours: {
      weekday: parseOpeningHour(toilet.aapningstider_hverdag),
      saturday: parseOpeningHour(toilet.aapningstider_loerdag),
      sunday: parseOpeningHour(toilet.aapningstider_soendag),
    },
    accessible: toilet.rullestol === "1" || toilet.rullestol === "JA",
    babycare: toilet.stellerom === "1" || toilet.stellerom === "JA",
    pissoir: false, // TODO: Verify that no toilets in Stavanger has pissoirs
    commune: "Stavanger",
  }));
}
