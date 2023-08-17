import { GetCharactersQuery } from '@/__generated__/graphql';
import { FC } from 'react';

type CharacterItem = NonNullable<
  NonNullable<
    Exclude<
      NonNullable<GetCharactersQuery['allPeople']>['people'],
      null
    >
  >[number]
>;

type CharacterCardProps = {
  item: CharacterItem;
};

export type CharacterCardFC = FC<CharacterCardProps>;
