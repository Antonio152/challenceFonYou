import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Character,
  ICharacterData,
  Info,
} from "../../interfaces/characterInterface";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characterName: "",
    charactersData: {
      data: {
        info: <Info>{},
        results: <Character[]>[],
      },
      isLoading: false,
      isError: false,
    },
    activeCharacter: <Character>{}, //WHen the user clicks on a character, we set the data
    activeSearch: false,
    openModal: false,
  },
  reducers: {
    setCharacterName: (state, action: PayloadAction<string>) => {
      state.characterName = action.payload;
    },
    setCharactersData: (state, action: PayloadAction<ICharacterData>) => {
      state.charactersData = action.payload;
    },
    setActiveCharacter: (state, action: PayloadAction<Character>) => {
      state.activeCharacter = action.payload;
    },
    setActiveSearch: (state, action: PayloadAction<boolean>) => {
      state.activeSearch = action.payload;
    },
    setOpenModal: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCharacterName,
  setCharactersData,
  setActiveCharacter,
  setActiveSearch,
  setOpenModal,
} = charactersSlice.actions;
