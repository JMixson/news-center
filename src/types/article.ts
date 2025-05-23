export type Article = {
  source: { id: string | null; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type ArticlesResponse = {
  status: 'ok' | 'error';
  totalResults: number;
  articles: Article[];
};
