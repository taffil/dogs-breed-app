import { Link, useLocation, useParams } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CircularProgress } from "@mui/material";
import { useGetDogQuery } from "../state/dogApi";

const Dog = () => {
  const location = useLocation();
  const { id } = useParams();

  const { data, isFetching, isError } = useGetDogQuery({ id: id ? id : "" });

  if (!id || !location?.state?.image) {
    return (
      <div
        className="flex flex-1 justify-center items-center md:items-center p-8"
        data-testid="error"
      >
        <span className="text-error font-semibold text-center">
          Something went wront, please try again later
        </span>
      </div>
    );
  }

  return isFetching ? (
    <div className="flex h-1/3 justify-center items-center p-8">
      <CircularProgress
        style={{
          color: "#4f46e5",
        }}
        size={48}
      />
    </div>
  ) : isError ? (
    <div
      className="flex flex-1 justify-center items-center md:items-center p-8"
      data-testid="error"
    >
      <span className="text-error font-semibold text-center">
        Something went wront, please try again later
      </span>
    </div>
  ) : (
    <div className="flex flex-col" data-testid="dog-details">
      <div className="bg-gray-300 dark:bg-gray-850 h-12 flex items-center">
        <Link
          to={`/`}
          className="text-gray-700 dark:text-gray-100 font-bold text-2xl pl-8"
        >
          <MdKeyboardArrowLeft />
        </Link>
        <span className="font-normal text-md pl-2">Dog Details</span>
      </div>
      <span className="font-bold text-4xl mx-8 mt-8">{data?.name}</span>
      <div className="flex flex-col m-8 p-4 lg:flex-row rounded-lg bg-gray-100 dark:bg-gray-800">
        <img
          src={location?.state?.image}
          className="w-full max-h-96 lg:w-1/2 object-contain rounded-lg self-center"
        />
        <div className="text-gray-500 flex flex-col flex-1 py-4 md:py-0">
          {data?.bred_for && (
            <>
              <p>Breed For:</p>
              <span className="font-bold">{data?.bred_for}</span>
              <hr className="bg-gray-400 h-[2px] dark:h-[1px] my-2" />
            </>
          )}
          {data?.breed_group && (
            <>
              <p>Breed Group:</p>
              <span className="font-bold">{data?.breed_group}</span>
              <hr className="bg-gray-400 h-[2px] dark:h-[1px] my-2" />
            </>
          )}
          {data?.height.metric && (
            <>
              <p>Height:</p>
              <span className="font-bold">{data?.height.metric} cm</span>
              <hr className="bg-gray-400 h-[2px] dark:h-[1px] my-2" />
            </>
          )}
          {data?.weight.metric && (
            <>
              <p>Weight:</p>
              <span className="font-bold">{data?.weight.metric} kg</span>
              <hr className="bg-gray-400 h-[2px] dark:h-[1px] my-2" />
            </>
          )}
          {data?.origin && (
            <>
              <p>Origin:</p>
              <span className="font-bold">{data?.origin}</span>
              <hr className="bg-gray-400 h-[2px] dark:h-[1px] my-2" />
            </>
          )}
          {data?.life_span && (
            <>
              <p>Life Span:</p>
              <span className="font-bold"> {data?.life_span}</span>
              <hr className="bg-gray-400 h-[2px] dark:h-[1px] my-2" />
            </>
          )}
          {data?.temperament && (
            <>
              <p>Temperament:</p>
              <span className="font-bold">{data?.temperament}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dog;
