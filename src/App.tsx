import { SearchBar } from "./components/SearchBar";
import { GridData } from "./components/GridData";
import { Modal } from "./components/Modal";
export const App = () => {
  return (
    <div className="relative px-8 py-8 h-max">
      <SearchBar />
      <GridData />
      <div className="flex justify-center items-center">
        <Modal />
      </div>
    </div>
  );
};
