import { IResolvers } from 'apollo-server-express'
import admin from '../admin'
import Toilet from '../models/Toilet'

// const snapshotToData = (snapshot: QuerySnapshot) => snapshot.docs.map(doc => doc.data())
const snapshotToDataWithId = (snapshot: admin.firestore.QuerySnapshot) => snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
}))

const toiletsCol = admin.firestore().collection("toilets")

const resolvers: IResolvers = {
    Query: {
        async toilets() {
            const toilets = await toiletsCol
                .get()
            return snapshotToDataWithId(toilets) as Toilet[]
        },
    },
    /*City: {
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
    }*/
}

export default resolvers