import { FlatList, Text, View } from 'react-native';
import { ListProps } from './types';
import { Loader } from '@/components/UI';
import { styles } from './styles';

const ListComponent = <T,>({
  loading,
  error,
  ...props
}: ListProps<T>) => {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Text>Error occurred...</Text>;
  }

  return (
    <FlatList
      ListEmptyComponent={
        <View style={styles.emptyWrapper}>
          <Text style={styles.emptyText}>The list is empty</Text>
        </View>
      }
      {...props}
    />
  );
};

export default ListComponent;
