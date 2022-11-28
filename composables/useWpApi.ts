import { Post } from "~~/types/Post.type";

export default () => {
  const config = useRuntimeConfig();
  const wpUri = config.public.wpUri;

  const get = async <T>(endpoint: string) => {
    return useFetch<T>(`${wpUri}/wp-json/wp/v2/${endpoint}`);
  };

  const getPosts = async (
    fields: string = "author,id,excerpt,title,link,slug,date",
    page: number = 1,
    perPgae: number = 20,
    category?: number
  ) => {
    let query: string = `posts?page=${page}&per_page=${perPgae}&_embed=1`;
    if (category) {
      query += `&category=${category}`;
    }
    return get<Post[]>(query);
  };

  const getPost = async (slug: string) => {
    return useFetch<any>(`${wpUri}/wp-json/wp/v2/posts?slug=${slug}&_embed=1`);
  };

  const getCatgories = async (fields: string = "name,slug,count") => {
    return useFetch(`${wpUri}/wp-json/wp/v2/categories`);
  };

  return {
    get,
    getPosts,
    getPost,
    getCatgories,
  };
};
