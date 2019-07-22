import axios from 'axios'
import { OpeningHour } from '../../../models/Toilet';

interface DifiToilet {
    latitude: string;
    longitude: string;
}

interface DifiToilets<T extends DifiToilet> {
    entries: T[]
}

export function parseOpeningHour(timeStr: string): OpeningHour {
    const time = timeStr.toLocaleLowerCase()
    if (time === "null" || time === "stengt") {
        return { from: "closed", to: "closed" }
    } else if (time === "all" || time === "døgnåpent") {
        return { from: "all", to: "all" }
    } else {
        const splitTime = time.replace(/ - /g, "-").split("-")
        const from = splitTime[0]
        const to = splitTime[1]
        if (from === to && (from === "00:00" || from === "24:00")) {
            return { from: "all", to: "all" }
        }
        return { from, to }
    }
}

export async function fetchToilets<T extends DifiToilet>(endpoint: string): Promise<T[]> {
    try {
        const response = await axios.get<DifiToilets<T>>(`https://hotell.difi.no${endpoint}`)
        return response
            .data
            .entries
            .filter(toilet => toilet.latitude !== "" && toilet.longitude !== "")
    } catch (err) {
        console.log(`Error fetching toilets from ${endpoint}: `, err)
        return []
    }
}