import { ComponentProps, FC } from 'react';
import { Switch } from 'react-native';

interface ToggleProps extends ComponentProps<typeof Switch> {
  label: string;
}

export type ToggleFC = FC<ToggleProps>;
