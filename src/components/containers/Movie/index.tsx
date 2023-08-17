import { View, Text, TouchableOpacity } from 'react-native';
import { useGetMovieQuery } from '@/__generated__/graphql';
import { MovieFC } from './types';
import {
  Card,
  CharacterCard,
  List,
  Loader,
  Row
} from '@/components/UI';
import { useMemo } from 'react';
import { compact } from '@/utils';

const Movie: MovieFC = ({ id }) => {
  const {
    loading,
    error,
    data: { film: movie } = {}
  } = useGetMovieQuery({ variables: { id } });

  const characters = useMemo(
    () => compact(movie?.characterConnection?.characters || []),
    [movie]
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Text>Error occurred...</Text>;
  }

  return (
    <>
      <Card>
        <Row title="Name:" text={movie?.title} />
        <Row title="Birth Year:" text={movie?.releaseDate} />
        <Row
          title="Species Count:"
          text={movie?.speciesConnection?.totalCount}
        />
        <Row
          title="Planets Count:"
          text={movie?.planetConnection?.totalCount}
        />
        <Row
          title="Vehicles Count:"
          text={movie?.vehicleConnection?.totalCount}
        />
      </Card>
      <List
        data={characters}
        renderItem={({ item }) => (
          <CharacterCard item={item} showLike={true} />
        )}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default Movie;
