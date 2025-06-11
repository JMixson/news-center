import Link from 'next/link';
import { Article } from '@/types/article';

function NewsCard({ article }: { article: Article }) {
  const { article_id, title, image_url, description, pubDate } = article;
  const publishDate = new Date(pubDate);

  return (
    <Link href={`/article/${article_id}`} className="block h-full">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden transform transition duration-300 hover:shadow-md hover:translate-y-[-5px] h-full flex flex-col">
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <img
            src={image_url}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-3 flex-grow">
            {description}
          </p>
          <div className="text-xs text-gray-500">
            {publishDate.toLocaleString()}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;
