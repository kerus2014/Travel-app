import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IEntertainments } from "../../types";

const URL = `http://45.147.176.176/api/`;

export const houseData = createApi({
  reducerPath: "houseData",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    headers: {
      Accept: "application/json",
    },
  }),
  endpoints: (build) => ({
    getDishes: build.query<any, void>({
      query: () => `dishes`,
    }),
    getEntertainments: build.query<IEntertainments[], void>({
      query: () => `entertaiments`,
    }),
    getEntertainmentsCurrent: build.query<IEntertainments, string>({
      query: (id) => `entertaiments/${id}`,
    }),
    getFeedingInfo: build.query<any, void>({
      query: () => `feeding-info`,
    }),
    getInfo: build.query<any, void>({
      query: () => `info`,
    }),
    getObjects: build.query<any, void>({
      query: () => `objects/`,
    }),
  }),
});

export const {
  useGetDishesQuery,
  useGetEntertainmentsQuery,
  useGetEntertainmentsCurrentQuery,
  useGetFeedingInfoQuery,
  useGetInfoQuery,
  useGetObjectsQuery,
} = houseData;
