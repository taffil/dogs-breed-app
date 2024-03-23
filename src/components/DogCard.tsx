import { FC } from "react";
import { Dog } from "../types/interface";
import { Link } from "react-router-dom";

interface DogProps {
  dog: Dog;
}

const DogCard: FC<DogProps> = ({ dog }) => {
  return (
    <Link
      to={`/${dog.name}`}
      state={{ id: dog.id, image: dog.image?.url }}
      className="rounded-lg shadow-lg dark:shadow-gray-650 bg-gray-100 dark:bg-gray-800 border-gray-100 dark:border-gray-900 border-[1px] hover:scale-105 transition-transform"
    >
      <div className="h-44 rounded-t-lg">
        <img
          className="object-cover h-full w-full rounded-t-lg"
          src={dog.image?.url}
          alt="Sunset in the mountains"
        />
      </div>
      <div className="px-6 my-4">
        <span className="font-semibold text-xl">
          {dog.name}
        </span>
      </div>
      <div className="px-6 pb-4 flex flex-col">
        {dog.bred_for && (
          <span className="w-fit bg-gray-200 dark:bg-gray-600 rounded px-3 py-1 text-sm font-semibold mr-2 mb-2">
            {dog.bred_for}
          </span>
        )}
        <span className="w-fit bg-gray-200 dark:bg-gray-600 rounded px-3 py-1 text-sm font-semibold mr-2 mb-2">
          {dog.life_span}
        </span>
      </div>
    </Link>
  );
};

export default DogCard;
