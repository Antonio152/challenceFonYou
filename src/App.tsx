import { SearchBar } from "./components/SearchBar";
import { GridData } from "./components/GridData";
export const App = () => {
  return (
    <div className="relative px-8 py-8 h-max">
      <SearchBar />
      <GridData />
    </div>
  );
};
