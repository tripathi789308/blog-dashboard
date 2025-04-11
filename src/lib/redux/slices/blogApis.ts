import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BlogPost, NewBlogPost } from '@/types';

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query<BlogPost[], void>({
      query: () => 'posts',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Post' as const, id })),
              { type: 'Post', id: 'LIST' },
            ]
          : [{ type: 'Post', id: 'LIST' }],
    }),
    getPostById: builder.query<BlogPost, number>({
      query: (id) => `posts/${id}`,
      providesTags: (result, error, id) => [{ type: 'Post', id }],
    }),
    addPost: builder.mutation<BlogPost, NewBlogPost>({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
  }),
});
export const { useGetPostsQuery, useGetPostByIdQuery, useAddPostMutation } = blogApi;