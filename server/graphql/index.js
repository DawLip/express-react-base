import graphqlHTTP from 'express-graphql';

import resolvers from './resolvers/resolvers';
import schema from './schema/schema';

export default app => {
  app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      rootValue: resolvers,
      graphiql: true
    })
  );
};
