import { ScreenType } from '@/types';
import { MainLayout } from '../layouts';
import { Movie } from '../containers';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text } from 'react-native';

const MovieScreen: ScreenType = () => {
  const { params } = useRoute();

  return (
    <MainLayout>
      <Movie id={params?.movieId as string} />
    </MainLayout>
  );
};

export default MovieScreen;
