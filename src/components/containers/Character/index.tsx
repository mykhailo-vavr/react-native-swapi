import { View, Text, TouchableOpacity } from 'react-native';
import { useGetCharacterQuery } from '@/__generated__/graphql';
import { CharacterFC } from './types';
import { Card, List, Loader, MovieCard, Row } from '@/components/UI';
import { useNavigation } from '@react-navigation/native';
import { useMemo } from 'react';
import { compact } from '@/utils';

const Character: CharacterFC = ({ id }) => {
  const { navigate } = useNavigation();

  const {
    loading,
    error,
    data: { person: character } = {}
  } = useGetCharacterQuery({ variables: { id } });

  const movies = useMemo(
    () => compact(character?.filmConnection?.films || []),
    [character]
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Text>Error occurred...</Text>;
  }

  return (
    <>
      {/* @ts-ignore */}
      <Card>
        <Row title="Name:" text={character?.name} />
        <Row title="Birth Year:" text={character?.birthYear} />
        <Row title="Height:" text={character?.height} />
        <Row title="Mass" text={character?.mass} />
        <Row title="Homeworld" text={character?.homeworld?.name} />
      </Card>
      <List
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity
            // @ts-ignore
            onPress={() => navigate('Movie', { movieId: item.id })}
          >
            <Card>
              <Row title="Title:" text={item.title} />
            </Card>
          </TouchableOpacity>
        )}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default Character;
