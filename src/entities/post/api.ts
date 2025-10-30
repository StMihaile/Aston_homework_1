import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Post = {
  id: number;
  title: string;
  content: string;
};
export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.org/posts' }),
  endpoints: builder => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts'
    })
  })
});

export const { useGetPostsQuery } = postsApi;
