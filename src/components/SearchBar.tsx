import { useCharacterStore } from "../hooks/useCharacterStore";

export const SearchBar = () => {
  const {
    characterName,
    handleSetCharacterName,
    handleSetActiveSearch,
    handleResetPagination,
  } = useCharacterStore();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (characterName.trim() !== "") {
      handleSetActiveSearch(true);
      handleResetPagination(); // Reset pagination
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="block text-2xl">Busca algun personaje:</h2>
      <input
        className="my-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Search..."
        value={characterName}
        onChange={(e) => handleSetCharacterName(e.target.value)}
      />
    </form>
  );
};
