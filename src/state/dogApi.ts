import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Dog, DogApiParams } from "../types/interface";
import { filterByLifeSpan, sortedDogsByName, paginateArray } from "../helpers";

export const dogApi = createApi({
  reducerPath: "dogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1/breeds",
    headers: {
      "Content-Type": "application/json",
      "x-api-key":
        "live_cLfKGwTrq3nJuJN0dE1Em7a3r8J29Fxfsd8MVTYFcCYxpXF4Zg73k1gZtCvgzFNP",
    },
  }),
  endpoints: (builder) => ({
    //Query to get all dogs
    getDogs: builder.query<
      { apiResponse: Dog[]; totalCount: number },
      DogApiParams
    >({
      query: () => {
        return {
          url: ``,
        };
      },
      transformResponse(
        apiResponse: Dog[],
        _meta,
        { page, pageSize, from, to, sort }
      ): { apiResponse: Dog[]; totalCount: number } {
        // Function to filter dogs by life span
        const filteredDogs = filterByLifeSpan(apiResponse, from, to);
        let sortedDogs = filteredDogs;
        if (!sort) {
          //Function to sort(desc) dogs by name
          sortedDogs = sortedDogsByName(filteredDogs);
        }
        //Paginate the sorted dogs
        const paginatedArray = paginateArray(sortedDogs, pageSize);
        return {
          apiResponse: paginatedArray[page],
          totalCount: sortedDogs.length,
        };
      },
    }),
    //Query to get a dog by id
    getDog: builder.query<Dog, { id: string }>({
      query: ({ id }) => `/${id}`,
    }),
    //Query to search for dogs
    searchDog: builder.query<
      { apiResponse: Dog[]; totalCount: number },
      DogApiParams
    >({
      query: ({ query }) => {
        return { url: `search`, params: { q: query } };
      },
      transformResponse(
        apiResponse: Dog[],
        _,
        { page, pageSize, from, to, sort }
      ): { apiResponse: Dog[]; totalCount: number } {
        //Filter dogs by life span
        const filteredDogs = filterByLifeSpan(apiResponse, from, to);
        let sortedDogs = filteredDogs;
        if (sort) {
          //Sort dogs by name
          sortedDogs = sortedDogsByName(filteredDogs);
        }
        //Paginate the sorted dogs
        const paginatedArray = paginateArray(sortedDogs, pageSize);

        return {
          apiResponse: paginatedArray[page],
          totalCount: sortedDogs.length,
        };
      },
    }),
  }),
});

export const { useGetDogsQuery, useGetDogQuery, useSearchDogQuery } = dogApi;
