/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import cors from 'cors';
import express from 'express';
import * as path from 'path';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';

const app = express();
const schema = new GraphQLSchema({});
const port = process.env.PORT || 3100;

app.use(cors());
app.use('/graphapi', graphqlHTTP({
  graphiql: true,
  schema,
}));
app.use('/graphapi/assets', express.static(
  path.join(__dirname, 'assets')
));

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/graphapi`);
});
server.on('error', console.error);