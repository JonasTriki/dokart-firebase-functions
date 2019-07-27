import axios from 'axios'

interface DifiToilet {
    latitude: string;
    longitude: string;
}

interface DifiToilets<T extends DifiToilet> {
    entries: T[]
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