import { RawArticle } from "@/types/article"

export default function ArticleCard({
  title,
  description,
  url,
  source,
  imageUrl,
  publishedAt,
}: RawArticle) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col md:flex-row gap-4 mb-6 hover:bg-gray-100 p-2 rounded"
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full md:w-48 object-cover rounded"
        />
      )}
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">
          {source?.toString()} • {publishedAt ? new Date(publishedAt).toLocaleDateString() : ""}
        </span>
        <h2 className="text-lg font-semibold">{title}</h2>
        {description && <p className="text-gray-700">{description}</p>}
      </div>
    </a>
  );
}