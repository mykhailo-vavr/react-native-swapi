import { FCWithChildren } from '@/types';

export type LikedProviderFC = FCWithChildren;

export type LikedState = string[];

export type LikedContextType = {
  likedCharacters: LikedState;
  toggleLike: (characterId: string) => void;
};
