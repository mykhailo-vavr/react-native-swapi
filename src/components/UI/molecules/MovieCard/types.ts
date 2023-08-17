import { GetMoviesQuery } from '@/__generated__/graphql';
import { FC } from 'react';

type MovieItem = NonNullable<
  NonNullable<
    Exclude<NonNullable<GetMoviesQuery['allFilms']>['films'], null>
  >[number]
>;

type MovieCardProps = {
  item: MovieItem;
};

export type MovieCardFC = FC<MovieCardProps>;
