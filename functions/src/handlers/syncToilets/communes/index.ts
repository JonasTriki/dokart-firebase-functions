import { fetchToilets as osloToilets } from './oslo'
import { fetchToilets as bergenToilets } from './bergen'
import { fetchToilets as stavangerToilets } from './stavanger'
import { fetchToilets as trondheimToilets } from './trondheim'
import Toilet from '../../../models/Toilet';

export async function fetchAllToilets(): Promise<Toilet[]> {
    return [
        ...await osloToilets(),
        ...await bergenToilets(),
        ...await stavangerToilets(),
        ...await trondheimToilets(),
    ]
}