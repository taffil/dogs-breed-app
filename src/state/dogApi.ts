// Need to use the React-specific entry point to allow generating React hooks
import {
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { Dog } from "../types/interface";

// Define a service using a base URL and expected endpoints
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
    getDogs: builder.query<
      { apiResponse: Dog[]; totalCount: number },
      { page: number; limit: number }
    >({
      query: ({ page, limit }) => {
        return {
          url: ``,
          params: {
            page,
            limit,
          },
        };
      },
      transformResponse(
        apiResponse: Dog[],
        meta: FetchBaseQueryMeta | undefined
      ): { apiResponse: Dog[]; totalCount: number } {
        return {
          apiResponse,
          totalCount: Number(meta?.response?.headers.get("Pagination-Count")),
        };
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetDogsQuery } = dogApi;
