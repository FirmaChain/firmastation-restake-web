import { ApolloProvider } from "@apollo/react-hooks/index";
import { ApolloClient, InMemoryCache } from "@apollo/client/index";
import { ApolloLink, concat } from "@apollo/client/link/core/index";
import { HttpLink } from "@apollo/client/link/http/index";

import { GRAPHQL_CONFIG } from "../config";

const httpLink = new HttpLink({ uri: GRAPHQL_CONFIG });
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  uri: GRAPHQL_CONFIG,
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache({}),
});

export { ApolloProvider, client };
