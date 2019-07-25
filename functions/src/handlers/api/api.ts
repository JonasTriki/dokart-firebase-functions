import { ApolloServer } from "apollo-server-cloud-functions"
import resolvers from "../../graphql/resolvers"
import typeDefs from "../../graphql/schema"

function api() {
    return new ApolloServer({
        typeDefs,
        resolvers,
        playground: true,
        introspection: true,
    }).createHandler({
        cors: {
            origin: '*',
            credentials: true,
        },
    })
}

export default api