import { PropsWithChildren, FC } from 'react';

export type FCWithChildren<T = any> = FC<PropsWithChildren & T>;

export type ScreenType = FC