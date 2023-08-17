import { ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { LoaderFC } from './types';

const Loader: LoaderFC = () => (
  <ActivityIndicator
    style={styles.loader}
    size="large"
    color="#0000ff"
  />
);

export default Loader;
