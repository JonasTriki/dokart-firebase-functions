import { IResolvers } from 'apollo-server-cloud-functions'
import admin from '../admin'
import City from '../models/City'
import Toilet from '../models/Toilet'
import { QuerySnapshot } from '@google-cloud/firestore';

const snapshotToData = (snapshot: QuerySnapshot) => snapshot.docs.map(doc => doc.data())
const snapshotToDataWithId = (snapshot: QuerySnapshot) => snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
}))

const citiesCol = admin.firestore().collection("cities")

const resolvers: IResolvers = {
    Query: {
        async cities() {
            const citiesSnapshot = await citiesCol.get()
            const toilets = await Promise.all(citiesSnapshot.docs.map(city =>
                citiesCol
                    .doc(city.id)
                    .collection("toilets")
                    .get()
            ))
            const cities = citiesSnapshot.docs.map((city, i) => ({
                id: city.id,
                name: city.id,
                toilets: snapshotToDataWithId(toilets[i]) as Toilet[],
            }))
            return cities as City[]
        }
    },
    City: {
        async toilets(city: City) {
            const toilets = await citiesCol
                .doc(city.id)
                .collection("toilets")
                .get()
            return snapshotToDataWithId(toilets) as Toilet[]
        }
    },
    Toilet: {
        async city(toilet: Toilet) {
            const toilets = await citiesCol
                .doc(toilet.city)
                .collection("toilets")
                .get()
            return {
                toilets: snapshotToData(toilets),
                id: toilet.city,
                name: toilet.city
            } as City
        }
    }
}

export default resolvers