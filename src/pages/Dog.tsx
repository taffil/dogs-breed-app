import { useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useGetDogQuery } from "../state/dogApi";

const Dog = () => {
  const {
    state: { id, image },
  } = useLocation();

  const { data, isFetching } = useGetDogQuery({ id: id });

  return isFetching ? (
    <div className="flex h-1/3 justify-center items-center">
      <CircularProgress
        style={{
          color: "#4f46e5",
        }}
        size={48}
      />
    </div>
  ) : (
    <div className="flex flex-col lg:flex-row rounded-lg bg-gray-100">
      <img src={image} className="w-full lg:w-1/2 object-contain rounded-lg" />
      <div className="font-semibold text-gray-500 p-4 flex flex-col flex-1">
        <p>Name:</p>
        <span className="font-bold text-gray-700">{data?.name}</span>
        <hr className="bg-gray-400 h-[2px] my-2" />
        {data?.bred_for && (
          <>
            <p>Breed For:</p>
            <span className="font-bold text-gray-700">{data?.bred_for}</span>
            <hr className="bg-gray-400 h-[2px] my-2" />
          </>
        )}
        {data?.breed_group && (
          <>
            <p>Breed Group:</p>
            <span className="font-bold text-gray-700">{data?.breed_group}</span>
            <hr className="bg-gray-400 h-[2px] my-2" />
          </>
        )}
        {data?.height.metric && (
          <>
            <p>Height:</p>
            <span className="font-bold text-gray-700">
              {data?.height.metric} cm
            </span>
            <hr className="bg-gray-400 h-[2px] my-2" />
          </>
        )}
        {data?.weight.metric && (
          <>
            <p>Weight:</p>
            <span className="font-bold text-gray-700">
              {data?.weight.metric} kg
            </span>
            <hr className="bg-gray-400 h-[2px] my-2" />
          </>
        )}
        {data?.origin && (
          <>
            <p>Origin:</p>
            <span className="font-bold text-gray-700">{data?.origin}</span>
            <hr className="bg-gray-400 h-[2px] my-2" />
          </>
        )}
        {data?.life_span && (
          <>
            <p>Life Span:</p>
            <span className="font-bold text-gray-700"> {data?.life_span}</span>
            <hr className="bg-gray-400 h-[2px] my-2" />
          </>
        )}
        {data?.temperament && (
          <>
            <p>Temperament:</p>
            <span className="font-bold text-gray-700">{data?.temperament}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Dog;
