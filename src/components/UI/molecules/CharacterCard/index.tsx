import { CharacterCardFC } from './types';
import Row from '../../atoms/Row';
import { Card } from '../../atoms';
import { useLikedContext } from '@/context/liked';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const CharacterCard: CharacterCardFC = ({ item }) => {
  const { likedCharacters, toggleLike } = useLikedContext();
  const { navigate } = useNavigation();

  const liked = likedCharacters.includes(item.id);
  return (
    <Card>
      <TouchableOpacity
        onPress={() =>
          // @ts-ignore
          navigate('Character', { characterId: item.id })
        }
      >
        <Row title="Name:" text={item?.name} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          toggleLike(item.id);
        }}
      >
        {liked && <Text style={styles.like}>Unlike</Text>}
        {!liked && <Text style={styles.like}>Like</Text>}
      </TouchableOpacity>
    </Card>
  );
};

export default CharacterCard;
