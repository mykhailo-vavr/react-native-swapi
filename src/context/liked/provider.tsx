import { useCallback, useMemo, useReducer, useState } from 'react';
import { LikedContext } from './context';
import {
  LikedContextType,
  LikedProviderFC,
  LikedState
} from './types';

const LikedProvider: LikedProviderFC = ({ children }) => {
  const [likedCharacters, setLikedCharacters] = useState<LikedState>(
    []
  );

  const toggleLike = useCallback(
    (characterId: string) => {
      if (likedCharacters.includes(characterId)) {
        setLikedCharacters(prevState =>
          prevState.filter(id => id !== characterId)
        );

        return;
      }

      setLikedCharacters(prevState => [...prevState, characterId]);
    },
    [likedCharacters, setLikedCharacters]
  );

  const contextValue: LikedContextType = useMemo(
    () => ({
      likedCharacters,
      toggleLike
    }),
    [likedCharacters, toggleLike]
  );

  return (
    <LikedContext.Provider value={contextValue}>
      {children}
    </LikedContext.Provider>
  );
};

export default LikedProvider;
