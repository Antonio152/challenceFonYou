import { useCharacterStore } from "../hooks/useCharacterStore";
export const Modal = () => {
  const { activeCharacter, openModal, handleSetOpenModal } =
    useCharacterStore();
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        openModal ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 left-0 top-0 h-full w-full overflow-y-auto overflow-x-hidden outline-none`}
    >
      <div className="bg-slate-200 rounded-lg relative flex min-h-[60%] w-auto translate-y-[-10px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[550px]:min-h-[70%] min-[280px]:max-w-[80%]">
        {/* bg-slate-200 relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-10px] items-center  transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[85%] */}
        <div className="relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
          {/*Modal title*/}
          <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
            <h5 className="text-xl font-medium leading-normal text-neutral-800">
              {activeCharacter.name}
            </h5>
            <button
              onClick={() => handleSetOpenModal(false)}
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            >
              <i className="fa-solid fa-xmark text-black text-xl"></i>
            </button>
          </div>
          {/* End modal title */}
          {/* Modal body */}
          <div className="relative p-4 grid grid-cols-1 lg:grid-cols-12 gap-1">
            <div className="col-span-5 relative overflow-hidden bg-cover bg-no-repeat px-3 perspective">
              <img
                className="rounded-lg w-full transition-transform duration-500 transform-gpu hover:rotate-3d"
                src={activeCharacter.image}
                alt={activeCharacter.name}
              />
            </div>
            <div className="col-span-7 max-sm:mt-2 px-3">
              <h5 className="text-lg font-medium leading-normal text-neutral-800 md:text-xl lg:text-2xl">
                Información
              </h5>
              <div className="py-2">
                <p className="mb-0 text-gray-700 text-base lg:text-lg">
                  <span className="font-bold">Estatus</span>:{" "}
                  {activeCharacter.status}
                </p>
                <p className="text-base text-gray-700 lg:text-lg">
                  <span className="font-bold">Especie</span>:{" "}
                  {activeCharacter.species}
                </p>
                <p className="text-base text-gray-700 lg:text-lg">
                  <span className="font-bold">Tipo</span>:{" "}
                  {activeCharacter.type || "N/A"}
                </p>
                <p className="text-base text-gray-700 lg:text-lg">
                  <span className="font-bold">Genero</span>:{" "}
                  {activeCharacter.gender}
                </p>
                <p className="text-base text-gray-700 lg:text-lg">
                  <span className="font-bold">Origen</span>:{" "}
                  {activeCharacter.origin?.name || "N/A"}
                </p>
                <p className="text-base text-gray-700 lg:text-lg">
                  <span className="font-bold">Localización</span>:{" "}
                  {activeCharacter.location?.name || "N/A"}
                </p>
              </div>
            </div>
          </div>
          {/* End modal body */}
          <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
            <button
              onClick={() => handleSetOpenModal(false)}
              className="ml-1 inline-block text-black rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
