import { useSelector } from "react-redux";
import {
  setActiveCharacter,
  setActiveSearch,
  resetPagination,
  setCharacterName,
  setCharactersData,
  setOpenModal,
  nextPage,
  previousPage,
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
    currentPage,
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

  const handleResetPagination = () => {
    dispatch(resetPagination());
  };
  const handleNexPage = () => {
    dispatch(nextPage());
  };
  const handlePrevPage = () => {
    dispatch(previousPage());
  };

  return {
    /* Functions */
    handleSetCharacterName,
    handleSetData,
    handleSetActiveCharacter,
    handleSetActiveSearch,
    handleSetOpenModal,
    handleResetPagination,
    handleNexPage,
    handlePrevPage,
    /* States */
    characterName,
    activeCharacter,
    charactersData,
    activeSearch,
    openModal,
    currentPage,
  };
};
