import { Switch, View, Text } from 'react-native';
import { styles } from './styles';
import { ToggleFC } from './types';

const Toggle: ToggleFC = ({ label, ...props }) => (
  <View style={styles.wrapper}>
    <Text style={styles.label}>{label}</Text>
    <Switch {...props} />
  </View>
);

export default Toggle;
