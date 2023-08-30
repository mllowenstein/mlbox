/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
const cors = require('cors');
const path = require('path');
const express = require('express');
const { graphqlHTTP }= require('express-graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean
} = require('graphql')

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