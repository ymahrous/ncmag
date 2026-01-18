// import { RawArticle } from "@/types/article";

// export default function ArticleRow({title, description, url, source, imageUrl, publishedAt}: RawArticle) {
//   return (
//     <article className="flex gap-4 py-4 border-b">
//       <div className="flex-1">
//         <h3 className="font-serif text-lg font-semibold leading-snug">
//           <a href={url} target="_blank">{title}</a>
//         </h3>
//         <p className="text-sm text-gray-600 mt-1 line-clamp-2">
//           {description}
//         </p>
//         <div className="text-xs text-gray-500 mt-2">
//           {source?.toString()}
//         </div>
//       </div>
//       {imageUrl && (<img src={imageUrl} className="w-28 h-20 object-cover hidden sm:block"/>)}
//     </article>
//   );
// };
"use client";
import Link from "next/link";
import { RawArticle } from "@/types/article";

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with -
    .replace(/(^-|-$)/g, ""); // remove leading/trailing -
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
    <Link
      href={`/article/${slug}`}
      className="flex gap-4 py-4 border-b hover:bg-gray-50 transition cursor-pointer"
    >
      <div className="flex-1">
        <h3 className="font-serif text-lg font-semibold leading-snug">
          {title}
        </h3>
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
    </Link>
  );
}