import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const googleBooksApi = createApi({
  reducerPath: "googleBooksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://www.googleapis.com/books/v1/`,
  }),
  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: (providedParams) => {
        const { searchedValue, subject, orderBy, startIndex, maxResults, key } =
          providedParams;
        return {
          url: `volumes/?q=${searchedValue}+subject:${subject}`,
          params: { orderBy, startIndex, maxResults, key },
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.items.push(...newItems.items);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getBookById: builder.query({
      query: (volumeId) => `volumes/${volumeId}`,
    }),
  }),
});

export const { useGetSearchResultsQuery, useGetBookByIdQuery } = googleBooksApi;
