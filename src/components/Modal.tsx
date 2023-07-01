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
      <div
        className="bg-slate-200 relative flex min-h-[70%] 
      w-auto translate-y-[-10px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(70%)] min-[576px]:max-w-[85%]"
      >
        {/* bg-slate-200 relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-10px] items-center  transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[85%] */}
        <div className="relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
          {/*Modal title*/}
          <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
            <h5 className="text-xl font-medium leading-normal text-neutral-800">
              {activeCharacter.name}
            </h5>
            {/*Close button*/}
            <button
              onClick={() => handleSetOpenModal(false)}
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            >
              <i className="fa-solid fa-xmark text-black text-xl"></i>
            </button>
          </div>
          {/* End modal title */}
          {/* Modal body */}
          <div className="relative p-4 grid grid-cols-12">
            <div className="col-span-4">imagen de personaje</div>
            <div className="col-span-8">
              <h5 className="text-xl font-medium leading-normal text-neutral-800">
                Modal title
              </h5>
              <p className="mb-0 text-base text-gray-700">
                <span className="font-bold">Estatus</span>:{" "}
                {/* {character.status} */}
              </p>
              <p className="text-base text-gray-700">
                <span className="font-bold">Especie</span>:{" "}
                {/* {character.species} */}
              </p>
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

/*  <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
        <p>Modal content goes here.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>  */
