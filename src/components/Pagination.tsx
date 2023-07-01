import { useCharacterStore } from "../hooks/useCharacterStore";
interface IPagination {
  isTop: boolean;
}
export const Pagination = ({ isTop }: IPagination) => {
  const {
    charactersData,
    currentPage,
    handleSetActiveSearch,
    handleNexPage,
    handlePrevPage,
  } = useCharacterStore();
  const { pages, count } = charactersData.data.info;
  const nextPage = () => {
    handleNexPage();
    handleSetActiveSearch(true);
  };
  const prevPage = () => {
    handlePrevPage();
    handleSetActiveSearch(true);
  };
  const charactersLength =
    currentPage === pages
      ? count
      : charactersData.data.results.length * currentPage;
  return (
    <>
      <div className={`flex flex-col md:flex-row mt-2 mb-3`}>
        {isTop && (
          <div className="text-slate-300 text-base my-auto max-sm:text-center max-md:mb-3 max-md:text-lg">
            Mostrando {charactersLength} de {count} personajes
          </div>
        )}
        <div
          className={`flex items-center justify-end ml-auto max-sm:m-auto ${
            isTop ? "max-sm:mb-2 max-md:mb-2" : "max-sm:mt-2 max-md:mt-2"
          }`}
        >
          <button
            className="py-1 px-2 rounded-lg border-slate-500 border-2 hover:bg-slate-700 max-md:py-2 max-md:px-4"
            disabled={currentPage === 1}
            onClick={prevPage}
          >
            <i className="fa-solid fa-arrow-left text-slate-200"></i>
          </button>
          <span className="text-slate-400 font-normal py-2 px-4 max-md:text-lg">
            Page <span className="font-bold">{currentPage}</span> of{" "}
            <span className="font-bold">{pages}</span>
          </span>
          <button
            className="py-1 px-2 rounded-lg border-slate-500 border-2 hover:bg-slate-700  max-md:py-2 max-md:px-4"
            disabled={currentPage === pages}
            onClick={nextPage}
          >
            <i className="fa-solid fa-arrow-right text-slate-200"></i>
          </button>
        </div>
      </div>
    </>
  );
};
