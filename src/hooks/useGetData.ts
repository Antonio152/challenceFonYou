import { useEffect } from "react";
import { useCharacterStore } from "./useCharacterStore";

export const useGetData = (page: number, activeSearch: boolean) => {
  const {
    handleSetData,
    charactersData,
    characterName,
    handleSetCharacterName,
    handleSetActiveSearch,
  } = useCharacterStore();

  const getImages = async () => {
    handleSetData({ ...charactersData, isLoading: true });
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_CHARACTER
        }/?page=${page}&name=${characterName}`
      );

      const data = await response.json();

      /* Disable search */
      handleSetActiveSearch(false);
      /* Clean Character name */
      handleSetCharacterName("");

      /* Catch Error 404 */
      if (Object.keys(data).length === 1) {
        handleSetData({
          ...charactersData,
          isLoading: false,
          isError: true,
        });
        return;
      }
      /* If data is OK */
      handleSetData({ data, isLoading: false, isError: false });
    } catch (error) {
      handleSetData({
        ...charactersData,
        isLoading: false,
        isError: true,
      });
    }
  };

  useEffect(() => {
    if (activeSearch) {
      getImages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSearch]);

  return { ...charactersData };
};
