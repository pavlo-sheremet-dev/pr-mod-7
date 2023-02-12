import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://6393b5f2ab513e12c514f63c.mockapi.io/api";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => "/comments",
      providesTags: ["Comments"],
    }),

    postComment: builder.mutation({
      query: (newComment) => ({
        url: "/comments",
        method: "POST",
        body: newComment,
      }),
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const { useGetCommentsQuery, usePostCommentMutation } = commentApi;
