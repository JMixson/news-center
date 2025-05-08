export type Post = {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  relevance_score: number | null;
  locale: string;
};

export type Metadata = {
  found: number;
  returned: number;
  limit: number;
  page: number;
};

export type PostsResponse = {
  meta: Metadata;
  data: Post[];
};
