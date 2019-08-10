import { fetchToilets as bergenToilets } from './bergen'
import { fetchToilets as enebakkToilets } from './enebakk'
import { fetchToilets as hareidToilets } from './hareid'
import { fetchToilets as hjelmelandToilets } from './hjelmeland'
import { fetchToilets as holToilets } from './hol'
import { fetchToilets as inderoyToilets } from './inderoy'
import { fetchToilets as jondalToilets } from './jondal'
import { fetchToilets as norddalToilets } from './norddal'
import { fetchToilets as orstaToilets } from './orsta'
import { fetchToilets as osloToilets } from './oslo'
import { fetchToilets as radoyToilets } from './radoy'
import { fetchToilets as ringebuToilets } from './ringebu'
import { fetchToilets as snillfjordToilets } from './snillfjord'
import { fetchToilets as stavangerToilets } from './stavanger'
import { fetchToilets as storElvdalToilets } from './stor-elvdal'
import { fetchToilets as strynToilets } from './stryn'
import { fetchToilets as tinnToilets } from './tinn'
import { fetchToilets as trondheimToilets } from './trondheim'
import { fetchToilets as valleToilets } from './valle'

import Toilet from '../../../models/Toilet';

export async function fetchAllToilets(): Promise<Toilet[]> {
    return [
        ...await bergenToilets(),
        ...await enebakkToilets(),
        ...await hareidToilets(),
        ...await hjelmelandToilets(),
        ...await holToilets(),
        ...await inderoyToilets(),
        ...await jondalToilets(),
        ...await norddalToilets(),
        ...await orstaToilets(),
        ...await osloToilets(),
        ...await radoyToilets(),
        ...await ringebuToilets(),
        ...await snillfjordToilets(),
        ...await stavangerToilets(),
        ...await storElvdalToilets(),
        ...await strynToilets(),
        ...await tinnToilets(),
        ...await trondheimToilets(),
        ...await valleToilets(),
    ]
}