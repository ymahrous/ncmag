"use client";
import Link from "next/link";
import { RawArticle } from "@/types/article";

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function ArticleRow({
  title,
  description,
  url,
  source,
  imageUrl,
  publishedAt,
}: RawArticle) {
  const slug = slugify(title);

  return (
    <div
      className="flex gap-4 py-4 border-b transition hover:bg-gray-50 "
    >
      <div className="flex-1">
        <Link href={`/article/${slug}`} className="cursor-pointer transition hover:underline">
        <h3 className="font-serif text-lg font-semibold leading-snug">
          {title}
        </h3>
        </Link>
        {description && (
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {description}
          </p>
        )}
        <div className="text-xs text-gray-500 mt-2">
          {source?.toString()} • {publishedAt ? new Date(publishedAt).toLocaleDateString() : ""}
        </div>
      </div>

      {imageUrl && (
        <img
          src={imageUrl}
          className="w-28 h-20 object-cover hidden sm:block rounded"
          alt={title}
        />
      )}
    </div>
  );
}