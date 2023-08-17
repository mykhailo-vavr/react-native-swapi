import { ApolloProvider as ApolloProviderOriginal } from '@apollo/client';
import { client } from './client';
import { ApolloProviderFC } from './types';

const ApolloProvider: ApolloProviderFC = ({ children }) => (
  <ApolloProviderOriginal client={client}>
    {children}
  </ApolloProviderOriginal>
);

export default ApolloProvider;
