/* eslint-disable @typescript-eslint/no-explicit-any */
// import { logoutUser } from "@/store/features/authSlice";
import {
  BaseQueryApi,
  BaseQueryArg,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "./endpoints";
import {
  clearAllCookies,
  COOKIE_CONFIG,
  getCookie,
  setCookie,
} from "@/utils/cookie";

interface IGetDataArgs {
  url: string;
  params?: Record<string, string | number | boolean>;
  tag?: string;
}
interface IPostDataArgs {
  url: string;
  data?: any;
  options?: any;
  invalidateTag?: string[];
}
interface IUpdateDataArgs {
  url: string;
  data: any;
  options?: any;
  invalidateTag?: string[];
}
interface IDeleteDataArgs {
  url: string;
  body?: any;
  options?: any;
  invalidateTag?: string[];
}

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URL,
  prepareHeaders: async (headers) => {
    const token = getCookie(COOKIE_CONFIG.accessToken);
    const tenantId = getCookie(COOKIE_CONFIG.tenantId);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    if (tenantId) {
      headers.set("x-tenant-id", `${tenantId}`);
    }
    headers.set("Accept", "application/json");
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: BaseQueryArg<any>,
  api: BaseQueryApi,
  extraOptions: any,
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const refresh = getCookie(COOKIE_CONFIG.refreshToken);
    const refreshResult = await baseQuery(
      {
        // change this with actual refresh token endpoint
        url: "",
        method: "POST",
        body: { refresh },
      },
      api,
      extraOptions,
    );
    if (refreshResult.data) {
      const { accessToken, refreshToken } = refreshResult.data as {
        accessToken: string;
        refreshToken: string;
      };
      setCookie({
        cookieName: COOKIE_CONFIG.accessToken,
        value: accessToken,
        expiresIn: COOKIE_CONFIG.accessTokenExpiryDuration,
      });
      setCookie({
        cookieName: COOKIE_CONFIG.refreshToken,
        value: refreshToken,
        expiresIn: COOKIE_CONFIG.refreshTokenExpiryDuration,
      });
      result = await baseQuery(args, api, extraOptions);
    } else {
      // logic to logout user
      clearAllCookies();
      window.location.href = "/login";
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Data"],
  endpoints: (builder) => ({
    getData: builder.query<any, IGetDataArgs>({
      query: ({ url, params }) => ({
        url,
        method: "GET",
        params,
      }),
      providesTags: (_, __, { tag }) =>
        tag ? [{ type: "Data", id: tag }] : [],
    }),

    postData: builder.mutation<any, IPostDataArgs>({
      query: ({ url, data, options }) => ({
        url,
        method: "POST",
        body: data,
        ...options,
      }),
      invalidatesTags: (_, __, { invalidateTag }) =>
        invalidateTag
          ? invalidateTag.map((tag: string) => ({ type: "Data", id: tag }))
          : [],
    }),

    updateData: builder.mutation<any, IUpdateDataArgs>({
      query: ({ url, data }) => ({
        url,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_, __, { invalidateTag }) =>
        invalidateTag
          ? invalidateTag.map((tag: string) => ({ type: "Data", id: tag }))
          : [],
    }),

    deleteData: builder.mutation<any, IDeleteDataArgs>({
      query: ({ url, body }) => ({
        url,
        method: "DELETE",
        body,
      }),
      invalidatesTags: (_, __, { invalidateTag }) =>
        invalidateTag
          ? invalidateTag.map((tag: string) => ({ type: "Data", id: tag }))
          : [],
    }),
  }),
});

export const {
  useGetDataQuery,
  usePostDataMutation,
  useUpdateDataMutation,
  useDeleteDataMutation,
} = apiSlice;
