'use client';
import NewsCard from './NewsCard';
import { articlesQueryOptions } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

function NewsGrid() {
  const { data, isLoading, isError, error } = useQuery(articlesQueryOptions);

  const articles = data?.results;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-gray-600">Loading articles...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-red-600">
          Error loading articles: {(error as Error).message}
        </div>
      </div>
    );
  }

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles && articles.length > 0 ? (
          articles.map(article => (
            <NewsCard key={article.article_id} article={article} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600">
            No articles found.
          </div>
        )}
      </div>
    </section>
  );
}

export default NewsGrid;
