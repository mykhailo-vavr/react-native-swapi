import { FC } from 'react';

type RowProps = {
  title: string;
  text: number | string | undefined | null;
};

export type RowFC = FC<RowProps>;
