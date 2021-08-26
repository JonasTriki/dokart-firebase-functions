import { gql } from "apollo-server-cloud-functions";

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
    commune: String!
  }

  type Query {
    toilets: [Toilet]
  }
`;

export default typeDefs;
