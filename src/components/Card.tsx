import { Character } from "../interfaces/characterInterface";

export const Card = (character: Character) => {
  return (
    <div className="cursor-pointer block h-auto max-w-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:scale-105 transition-transform duration-300">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img className="rounded-t-lg w-full" src={character.image} alt="a" />
      </div>
      <div className="p-6">
        <h5 className="mb-4 text-xl font-medium leading-tight text-neutral-800">
          {character.name}
        </h5>
        <p className="mb-0 text-base text-gray-700">
          <span className="font-bold">Estatus</span>: {character.status}
        </p>
        <p className="text-base text-gray-700">
          <span className="font-bold">Especie</span>: {character.species}
        </p>
      </div>
    </div>
  );
};
