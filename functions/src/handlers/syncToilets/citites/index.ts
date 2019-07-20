import { fetchToilets as fetchOsloToilets } from './oslo'
import { fetchToilets as fetchBergenToilets } from './bergen'
import { fetchToilets as fetchStavangerToilets } from './stavanger'
import Toilet from '../../../models/Toilet';

type City = 'oslo' | 'bergen' | 'stavanger'

interface CityToilets {
    city: City;
    toilets: Toilet[];
}

export async function fetchAllToilets(): Promise<CityToilets[]> {
    return [
        {
            city: "oslo",
            toilets: await fetchOsloToilets()
        },
        {
            city: "bergen",
            toilets: await fetchBergenToilets()
        },
        {
            city: "stavanger",
            toilets: await fetchStavangerToilets()
        },
    ]
}