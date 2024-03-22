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
      className="rounded-lg shadow-xl bg-gray-100 max-w-64"
    >
      <div className="h-44 rounded-t-lg">
        <img
          className="object-cover h-full w-full rounded-t-lg"
          src={dog.image?.url}
          alt="Sunset in the mountains"
        />
      </div>
      <div className="px-6 my-4">
        <div className="font-semibold text-xl text-gray-700">{dog.name}</div>
      </div>
      <div className="px-6 pb-4 flex flex-col">
        <span className="w-fit bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {dog.bred_for}
        </span>
        <span className="w-fit bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {dog.life_span}
        </span>
      </div>
    </Link>
  );
};

export default DogCard;
