import { RawArticle } from "@/types/article";

export default function ArticleRow({title, description, url, source, imageUrl, publishedAt}: RawArticle) {
  return (
    <article className="flex gap-4 py-4 border-b">
      <div className="flex-1">
        <h3 className="font-serif text-lg font-semibold leading-snug">
          <a href={url} target="_blank">{title}</a>
        </h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {description}
        </p>
        <div className="text-xs text-gray-500 mt-2">
          {source?.toString()}
        </div>
      </div>
      {imageUrl && (<img src={imageUrl} className="w-28 h-20 object-cover hidden sm:block"/>)}
    </article>
  );
};