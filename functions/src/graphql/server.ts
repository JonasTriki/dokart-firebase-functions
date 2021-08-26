import { ApolloServer } from "apollo-server-cloud-functions";

import schema from "./schema";
import resolvers from "./resolvers";

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  introspection: true,
  playground: true,
});

const handler = apolloServer.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
});

export default handler;
