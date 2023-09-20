import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';
import { buildSchema } from 'type-graphql';

const main = async () => {
  const schema = await buildSchema({
    resolvers: [`${__dirname}/resolvers/*.resolvers.{ts,js}`],
    emitSchemaFile: true,
  });

  const apolloServer = new ApolloServer({ schema });

  await apolloServer.start();

  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(4400, () => {
    console.log('server started on http://localhost:4400/graphql');
  });
};

main().catch((err) => {
  console.error(err);
});
