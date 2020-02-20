const { GraphQLClient } = require("graphql-request");

exports.graphQLClient = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
  credentials: "include",
  mode: "cors",
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_QUERY_TOKEN}`
  }
});
