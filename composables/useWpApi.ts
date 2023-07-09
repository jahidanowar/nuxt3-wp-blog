/**
 * WordPress Composables
 * A collection of WordPress composable functions.
 */

import { Post } from "~~/types/post";

export default () => {
  const config = useRuntimeConfig();
  const WP_URL: string = config.public.wpUri;

  const get = async <T>(endpoint: string) => {
    return useFetch<T>(`${WP_URL}/wp-json/wp/v2/${endpoint}`);
  };

  const getPosts = async (
    category?: number,
    page: number = 1,
    perPgae: number = 20,
    fields: string = "author,id,excerpt,title,link,slug,date"
  ) => {
    let query: string = `posts?page=${page}&per_page=${perPgae}&_embed=1`;
    if (category) {
      query += `&categories=${category}`;
    }
    return get<Post[]>(query);
  };

  const getPost = async (slug: string) => {
    return get<Post[]>(`posts?slug=${slug}&_embed=1`);
  };

  const getCatgories = async (fields: string = "name,slug,count") => {
    return get<any>(`categories`);
  };

  const getCatgory = async (slug: string) => {
    return get<any>(`categories?slug=${slug}`);
  };

  return {
    get,
    getPosts,
    getPost,
    getCatgories,
    getCatgory,
  };
};
