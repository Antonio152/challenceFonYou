import { useSelector } from "react-redux";
import {
  setActiveCharacter,
  setActiveSearch,
  setCharacterName,
  setCharactersData,
  setOpenModal,
} from "../store/character/characterSlice";
import { RootState, useAppDispatch } from "../store/store";
import { Character, ICharacterData } from "../interfaces/characterInterface";

export const useCharacterStore = () => {
  const dispatch = useAppDispatch();
  const {
    characterName,
    activeCharacter,
    charactersData,
    activeSearch,
    openModal,
  } = useSelector((state: RootState) => state.character);
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

  const handleSetOpenModal = (value: boolean) => {
    dispatch(setOpenModal(value));
  };

  return {
    /* Functions */
    handleSetCharacterName,
    handleSetData,
    handleSetActiveCharacter,
    handleSetActiveSearch,
    handleSetOpenModal,
    /* States */
    characterName,
    activeCharacter,
    charactersData,
    activeSearch,
    openModal,
  };
};
