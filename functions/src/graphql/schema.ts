import { gql } from 'apollo-server-cloud-functions'

const typeDefs = gql`
    type OpeningHour {
        from: String!
        to: String!
    }

    type OpeningHours {
        weekday: OpeningHour!
        saturday: OpeningHour!
        sunday: OpeningHour!
    }

    type Toilet {
        id: ID!
        latitude: Float!
        longitude: Float!
        price: Float!
        placement: String!
        address: String!
        openingHours: OpeningHours!
        accessible: Boolean!
        babycare: Boolean!
        pissoir: Boolean!
        city: String!
    }

    type City {
        id: ID!
        name: String!
        toilets: [Toilet]
    }

    type Query {
        cities: [City]
    }
`

export default typeDefs