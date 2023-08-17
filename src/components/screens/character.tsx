import { ScreenType } from '@/types';
import { MainLayout } from '../layouts';
import { Character } from '../containers';
import { useRoute } from '@react-navigation/native';

const CharacterScreen: ScreenType = () => {
  const { params } = useRoute();

  return (
    <MainLayout>
      {/* @ts-ignore */}
      <Character id={params?.characterId as string} />
    </MainLayout>
  );
};

export default CharacterScreen;
