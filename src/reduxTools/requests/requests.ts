import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IEntertainments } from "../../types";
import { INearest } from "../../services/datas";

const URL = `http://eugenest.vh77.hosterby.com/api/`;

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
      query: () => `dishes/`,
    }),
    getEntertainments: build.query<IEntertainments[], void>({
      query: () => `entertainments/`,
    }),
    getEntertainmentsCurrent: build.query<IEntertainments, string>({
      query: (id) => `entertaiments/${id}`,
    }),
    getFeedingInfo: build.query<any, void>({
      query: () => `feeding-info/`,
    }),
    getInfo: build.query<any, void>({
      query: () => `info/`,
    }),
    getObjects: build.query<any, void>({
      query: () => `objects/`,
    }),
    getNearest: build.query<INearest[], void>({
      query: () => `nearests/`,
    }),
    getGallery: build.query<any, void>({
      query: () => `galeries/`,
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
  useGetNearestQuery,
  useGetGalleryQuery,
} = houseData;
