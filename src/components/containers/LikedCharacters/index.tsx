import { useLikedContext } from '@/context/liked';
import { LikedCharactersFC } from './types';
import { useGetCharactersQuery } from '@/__generated__/graphql';
import { useMemo } from 'react';
import { compact } from '@/utils';
import { MainLayout } from '@/components/layouts';
import { View } from 'react-native';
import { CharacterCard, List } from '@/components/UI';

const LikedCharacters: LikedCharactersFC = () => {
  const { likedCharacters } = useLikedContext();
  const { data, loading, error } = useGetCharactersQuery();

  const filteredCharacters = useMemo(() => {
    const compactedCharacters = compact(
      data?.allPeople?.people || []
    );

    return compactedCharacters.filter(({ id }) =>
      likedCharacters.includes(id)
    );
  }, [data, likedCharacters]);

  return (
    <MainLayout>
      <View>
        <List
          data={filteredCharacters}
          renderItem={({ item }) => <CharacterCard item={item} />}
          keyExtractor={({ id }) => id}
          error={error}
          loading={loading}
        />
      </View>
    </MainLayout>
  );
};

export default LikedCharacters;
