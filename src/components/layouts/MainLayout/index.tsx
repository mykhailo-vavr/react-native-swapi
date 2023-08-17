import { FCWithChildren } from '@/types';
import { styles } from './styles';
import { View } from 'react-native';

const MainLayout: FCWithChildren = ({ children }) => (
  <View style={styles.wrapper}>{children}</View>
);

export default MainLayout;
