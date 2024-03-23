import { CircularProgress, Pagination, Switch } from "@mui/material";
import Button from "../components/Button";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import { useGetDogsQuery, useSearchDogQuery } from "../state/dogApi";
import { useDebounce } from "use-debounce";
import DogCard from "../components/DogCard";

const Dashboard = () => {
  const [page, setPage] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [skip, setSkip] = useState<boolean>(true);
  const [lifeSpan, setLifeSpan] = useState<{ min: number; max: number }>({
    min: 0,
    max: 30,
  });
  const [sortDogsByName, setSortDogsByName] = useState<boolean>(false);

  const { data, isFetching, refetch } = useGetDogsQuery(
    {
      page: page,
      pageSize: 10,
      from: lifeSpan.min,
      to: lifeSpan.max,
      sort: sortDogsByName,
    },
    { skip: !skip }
  );

  const debouncedSearchQuery = useDebounce(
    { searchQuery, min: lifeSpan.min, max: lifeSpan.max },
    250
  );
  const {
    data: searchResult,
    isFetching: searchIsFetching,
    refetch: searchQueryRefetch,
  } = useSearchDogQuery(
    {
      query: debouncedSearchQuery[0].searchQuery,
      page,
      pageSize: 10,
      from: debouncedSearchQuery[0].min,
      to: debouncedSearchQuery[0].max,
      sort: sortDogsByName,
    },
    { skip: skip }
  );

  useEffect(() => {
    if (!searchQuery) {
      setSkip(true);
    }
  }, [searchQuery]);

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col bg-gray-300 dark:bg-gray-800 p-4 m-4 rounded-md w-fit">
        <div className="flex items-center justify-between">
          <Input
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(0);
            }}
          />
          <Button
            text="Search"
            className="ml-6 px-4 py-2.5 xs:hidden"
            onClick={() => setSkip(false)}
            disabled={!searchQuery}
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-row items-center pr-4 py-4">
            <p className="font-semibold text-l mr-3">Life Span: </p>
            <Input
              id="minLifeSpan"
              type="number"
              placeholder="From"
              className="bg-white max-w-[60px]"
              min={0}
              max={30}
              value={lifeSpan.min}
              onChange={(e) => {
                setLifeSpan({ ...lifeSpan, min: parseInt(e.target.value) });
                setPage(0);
              }}
            />
            <p className="font-semibold text-l mx-3"> - </p>
            <Input
              id="maxLifeSpan"
              type="number"
              placeholder="To"
              className="bg-white max-w-[60px]"
              min={0}
              max={30}
              value={lifeSpan.max}
              onChange={(e) => {
                setLifeSpan({ ...lifeSpan, max: parseInt(e.target.value) });
                setPage(0);
              }}
            />
            <p className="ml-1 text-xs"> (years)</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <p className="font-semibold text-l">Sort By Breed </p>
              <Switch
                checked={sortDogsByName}
                onChange={() => {
                  setSortDogsByName(!sortDogsByName);
                  if (skip) {
                    refetch();
                  } else {
                    searchQueryRefetch();
                  }
                }}
                sx={{
                  span: {
                    color: sortDogsByName ? "#4f46e5" : "#f3f4f6",
                  },
                }}
              />
            </div>
            <Button
              text="Search"
              className="px-4 py-2.5 md:hidden"
              onClick={() => setSkip(false)}
              disabled={!searchQuery}
            />
          </div>
        </div>
      </div>
      {isFetching || searchIsFetching ? (
        <div className="flex flex-1 justify-center items-center p-8">
          <CircularProgress
            style={{
              color: "#4f46e5",
            }}
            size={48}
          />
        </div>
      ) : (
        <div className="p-8 grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-8 gap-8">
          {searchQuery && skip === false
            ? searchResult?.apiResponse?.map((dog, index) => (
                <DogCard key={index} dog={dog} />
              ))
            : data?.apiResponse?.map((dog, index) => (
                <DogCard key={index} dog={dog} />
              ))}
        </div>
      )}
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          "& .MuiPaginationItem-root:hover": {
            backgroundColor: "#4f46e5",
            color: "#f3f4f6",
          },
          "& .Mui-selected": {
            backgroundColor: document.body.classList.contains("dark")
              ? "#2F3136"
              : "",
            color: document.body.classList.contains("dark") ? "#f3f4f6" : "",
          },
          "& .MuiPaginationItem-root": {
            color: document.body.classList.contains("dark") ? "#f3f4f6" : "",
          },
        }}
        count={
          searchQuery && skip === false
            ? searchResult?.totalCount
              ? Math.ceil(searchResult?.totalCount / 10)
              : 0
            : data?.totalCount
            ? Math.ceil(data?.totalCount / 10)
            : 0
        }
        page={page + 1}
        onChange={(_, page) => {
          setPage(page - 1);
        }}
        size="large"
      />
    </div>
  );
};

export default Dashboard;
