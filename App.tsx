import Screens from '@/components/screens';
import LikedProvider from '@/context/liked/provider';
import { ApolloProvider } from '@/graphql';

const App = () => {
  return (
    <ApolloProvider>
      <LikedProvider>
        <Screens />
      </LikedProvider>
    </ApolloProvider>
  );
};

export default App;
