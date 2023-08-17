import { useCallback, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useGetMoviesQuery } from '@/__generated__/graphql';
import { compact } from '@/utils';
import { MovieCard, List } from '@/components/UI/molecules';
import { MainLayout } from '@/components/layouts';
import { MoviesFC } from './types';
import { useNavigation } from '@react-navigation/native';
import { Toggle } from '@/components/UI';
import { styles } from './styles';

const Movies: MoviesFC = () => {
  const { loading, error, data } = useGetMoviesQuery();
  const { navigate } = useNavigation();
  const [sortAscending, setSortAscending] = useState(false);

  const toggleSwitch = useCallback(
    () => setSortAscending(previousState => !previousState),
    [setSortAscending]
  );

  const films = useMemo(() => {
    const compactedFilms = compact(data?.allFilms?.films || []);
    const sortedFilms = [...compactedFilms].sort((a, b) => {
      const compareValue =
        +new Date(a.releaseDate || '') -
        +new Date(b.releaseDate || '');
      return sortAscending ? compareValue : -compareValue;
    });

    return sortedFilms;
  }, [data, sortAscending]);

  return (
    <MainLayout>
      <View>
        <View style={styles.sortWrapper}>
          <Text style={styles.sortLabel}>Sort by release date</Text>
          <Toggle
            onValueChange={toggleSwitch}
            value={sortAscending}
            label={sortAscending ? 'Desc' : 'Asc'}
          />
        </View>
        <List
          data={films}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                // @ts-ignore
                navigate('Movie', { movieId: item.id });
              }}
            >
              <MovieCard item={item} />
            </TouchableOpacity>
          )}
          keyExtractor={({ id }) => id}
          error={error}
          loading={loading}
        />
      </View>
    </MainLayout>
  );
};

export default Movies;
