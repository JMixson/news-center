import { ArticlesResponse } from '@/types/article';

const articleQueryKey = ['articles'];
const baseUrl = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=7';
const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

const fetchArticles = async (): Promise<ArticlesResponse> => {
  const response = await fetch(`${baseUrl}&apikey=${apiKey}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }

  const data = (await response.json()) as ArticlesResponse;
  return data;
};

export const articlesQueryOptions = {
  queryKey: articleQueryKey,
  queryFn: fetchArticles,
};
