import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IEntertainments, House, IDishCard, IMeal,
         IBackPhotos, IMainPage, IRule, INearest, IGallery, IInfo } from "../../types";

const URL = `http://eugenest.vh77.hosterby.com/api/`;

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    headers: {
      Accept: "application/json",
    },
  }),
  endpoints: (build) => ({
    getDishes: build.query<IDishCard[], void>({
      query: () => `dish/`,
    }),
    getEntertainments: build.query<IEntertainments[], void>({
      query: () => `entertainments/`,
    }),
    getEntertainmentsCurrent: build.query<IEntertainments, string>({
      query: (id) => `entertainments/${id}`,
    }),
    getFeedingInfo: build.query<IMeal[], void>({
      query: () => `meal/`,
    }),
    getGallery: build.query<IGallery[], void>({
      query: () => `galeries/`,
    }),
    getGalleryCurrent: build.query<any, string>({
      query: (id) => `galeries/${id}`,
    }),
    getObjects: build.query<House[], void>({
      query: () => `houses/`,
    }),
    getObjectCurrent: build.query<House, string>({
      query: (id) => `houses/${id}`,
    }),
    getInfo: build.query<IInfo[], void>({
      query: () => `info/`,
    }),
    
    getNearests: build.query<INearest[], void>({
      query: () => `nearests/`,
    }),
    
    getRule: build.query<IRule[], void>({
      query: () => `rule/`,
    }),

    getMainPage: build.query<IMainPage[], void>({
      query: () => `main-page/`,
    }),

    getBackPhotos: build.query<IBackPhotos[], void>({
      query: () => `back-photos/`,
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
  useGetObjectCurrentQuery,
  useGetNearestsQuery,
  useGetGalleryQuery,
  useGetGalleryCurrentQuery,
  useGetRuleQuery,
  useGetMainPageQuery,
  useGetBackPhotosQuery,
  
} = api;
