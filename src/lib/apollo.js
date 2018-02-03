import { omitBy, isEmpty } from 'lodash';
import queryString from 'query-string';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const customFetch = (uri, options) => {
  console.log('this is custom fetch');
  const { body, ...newOptions } = options;
  const parsedBody = JSON.parse(body);
  const command = omitBy(parsedBody, isEmpty);

  if (command.variables) {
    command.variables = JSON.stringify(command.variables);
  }

  const requestedString = uri + '?' + queryString.stringify(command);

  return fetch(requestedString, newOptions);
};

const link = createHttpLink({
  // uri: 'https://api.destiny.plumbing/graphql',
  uri: 'https://localhost:3000/graphql',
  fetchOptions: { method: 'GET' },
  fetch: customFetch,
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
