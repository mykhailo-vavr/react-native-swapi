import { View, Text } from 'react-native';
import { RowFC } from './types';
import { styles } from './styles';

const Row: RowFC = ({ title, text }) => (
  <View style={styles.wrapper}>
    <Text style={styles.title}>{title}</Text>
    <Text>{text ?? '-'}</Text>
  </View>
);

export default Row;
