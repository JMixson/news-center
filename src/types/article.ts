export type Article = {
  article_id: string;
  title: string;
  link: string;
  creator: string[] | null;
  description: string | null;
  source_icon: string;
  pubDate: string;
  image_url: string;
  categories: string[];
};

export type ArticlesResponse = {
  status: 'success' | 'error';
  totalResults: number;
  results: Article[];
};
