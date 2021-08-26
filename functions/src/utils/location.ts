import { toLatLon } from "utm";
import LatLng from "../models/LatLng";

export function utmToLatLng(
  easting: number,
  northing: number,
  zone: number
): LatLng {
  return toLatLon(easting, northing, zone, "N");
}
