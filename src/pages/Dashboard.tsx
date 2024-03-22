import { useState } from "react";
import Button from "../components/Button";
import DogCard from "../components/DogCard";
import Input from "../components/Input";
import { useGetDogsQuery } from "../state/dogApi";
import { Pagination } from "@mui/material";

const Dogs = () => {
  const [page, setPage] = useState(0);

  const { data, isLoading, isFetching } = useGetDogsQuery({
    page: page,
    limit: 10,
  });

  return (
    <div className="flex flex-col p-8">
      <div className="flex flex-row">
        <Input placeholder="Search Field" />
        <Button text={"Search"} className="mx-6" />
      </div>
      <hr className="bg-gray-400 h-[2px] w-full my-8" />
      {isLoading || isFetching ? (
        <div className="h-screen">
          <p>sdfksd</p>
        </div>
      ) : (
        <div className="min-h-screen">
          <div className="grid grid-rows-1 grid-cols-5 gap-8">
            {data?.apiResponse?.map((dog, index) => {
              return <DogCard key={index} dog={dog} />;
            })}
          </div>
          <Pagination
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: "#4f46e5",
                color: "#fff9fa",
              },
            }}
            count={data?.totalCount ? Math.ceil(data?.totalCount / 10) : 0}
            page={page + 1}
            onChange={(_, page) => {
              setPage(page - 1);
            }}
            size="large"
          />
        </div>
      )}
    </div>
  );
};

export default Dogs;
