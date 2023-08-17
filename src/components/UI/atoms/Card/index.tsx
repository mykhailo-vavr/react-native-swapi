import { View, Text, StyleSheet } from 'react-native';
import { CardFC } from './types';
import { styles } from './styles';

const Card: CardFC = ({ children }) => (
  <View style={styles.wrapper}>{children}</View>
);

export default Card;
