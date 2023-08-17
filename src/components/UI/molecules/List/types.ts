import { FC, ReactElement, ReactNode, ComponentProps } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';

export interface ListProps<T>
  extends ComponentProps<typeof FlatList<T>> {
  loading: boolean;
  error: Error | undefined;
}
