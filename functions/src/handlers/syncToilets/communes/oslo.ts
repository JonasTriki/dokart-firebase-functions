import axios from 'axios'
import Toilet from '../../../models/Toilet'
import { openAllDay } from '../../../utils/time';

interface OsloToilet {
    attributes: {
        OBJECTID: number;
        Objekttype: string;
        Kommentar: string;
        Navn: string;
        Adresse: string;
        URL: string;
        Forvalter: string;
        Tilgjengelighetsvurdering: number;
        Bydel: string;
        Toalettype: number;
    },
    geometry: {
        x: number;
        y: number;
    }
}

interface OsloToilets {
    features: OsloToilet[]
}

async function fetchOsloToilets(): Promise<OsloToilet[]> {
    try {
        const response = await axios.get<OsloToilets>("https://geodata.bymoslo.no/arcgis/rest/services/geodata/Temadata/MapServer/4/query?where=1=1&inSR=25832&spatialRel=esriSpatialRelIntersects&outFields=*&returnGeometry=true&outSR=4326&f=pjson")
        return response.data.features
    } catch (err) {
        console.log("Error fetching toilets in Oslo: ", err)
        return []
    }
}

export async function fetchToilets(): Promise<Toilet[]> {
    const toilets = await fetchOsloToilets()
    return toilets.map(toilet => ({
        latitude: toilet.geometry.y,
        longitude: toilet.geometry.x,
        price: -1,
        placement: toilet.attributes.Navn,
        address: toilet.attributes.Bydel || toilet.attributes.Adresse,
        openingHours: {
            weekday: openAllDay,
            saturday: openAllDay,
            sunday: openAllDay,
        },
        accessible: toilet.attributes.Toalettype === 1,
        babycare: false,
        pissoir: false,
        commune: "Oslo",
    }))
}