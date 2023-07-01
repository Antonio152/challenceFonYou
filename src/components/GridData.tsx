import { useCharacterStore } from "../hooks/useCharacterStore";
import { Card } from "./Card";
import { useGetData } from "../hooks/useGetData";
import { Pagination } from "./Pagination";
export const GridData = () => {
  const { activeSearch, currentPage } = useCharacterStore();
  const { data, isLoading, isError } = useGetData(currentPage, activeSearch);

  return (
    <>
      {isLoading && <h1 className="text-bold">Cargando...</h1>}
      {isError && !isLoading && (
        <h1 className="text-bold">
          No encontramos lo que buscabas, itentalo nuevamente
        </h1>
      )}
      {!isLoading && !isError && data.results.length > 0 && (
        <>
          {/* Top navigation buttons */}
          <Pagination isTop />
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.results.map((character) => (
              <Card key={character.id} {...character} />
            ))}
          </div>
          <Pagination isTop={false} />
        </>
      )}

      {/* Navigation buttons */}
    </>
  );
};
