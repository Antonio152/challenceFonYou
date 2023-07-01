import { useSelector } from "react-redux";
import {
  setActiveCharacter,
  setActiveSearch,
  setCharacterName,
  setCharactersData,
} from "../store/character/characterSlice";
import { RootState, useAppDispatch } from "../store/store";
import { Character, ICharacterData } from "../interfaces/characterInterface";

export const useCharacterStore = () => {
  const dispatch = useAppDispatch();
  const { characterName, activeCharacter, charactersData, activeSearch } =
    useSelector((state: RootState) => state.character);
  const handleSetCharacterName = (characterName: string) => {
    dispatch(setCharacterName(characterName));
  };

  const handleSetData = (data: ICharacterData) => {
    dispatch(setCharactersData(data));
  };

  const handleSetActiveCharacter = (character: Character) => {
    dispatch(setActiveCharacter(character));
  };

  const handleSetActiveSearch = (value: boolean) => {
    dispatch(setActiveSearch(value));
  };

  return {
    /* Functions */
    handleSetCharacterName,
    handleSetData,
    handleSetActiveCharacter,
    handleSetActiveSearch,
    /* States */
    characterName,
    activeCharacter,
    charactersData,
    activeSearch,
  };
};
