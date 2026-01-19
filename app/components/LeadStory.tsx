import Link from "next/link";
import { RawArticle } from "@/types/article";

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function LeadStory({title, description, url, source, imageUrl, publishedAt}: RawArticle) {
  const slug = slugify(title);

  return (
    <article
      className="grid md:grid-cols-1 gap-6 border-b pb-6 mb-8 transition hover:bg-gray-50"
      // flex gap-4 py-4 border-b
    >
      <>
        {imageUrl && (<img src={imageUrl} alt={title} className="w-full h-72 object-cover rounded" />)}
        <div>
          {/* <span className="text-xs uppercase text-red-700 font-semibold">
            {category}
          </span> */}
          <Link href={`/article/${slug}`} className="cursor-pointer transition hover:underline"><h1 className="text-4xl font-serif font-bold leading-tight mt-2">{title}</h1></Link>
          <p className="mt-3 text-gray-700 text-base">{description}</p>
          <div className="mt-4 text-sm text-gray-500">
            {source?.toString()} · {" "}{publishedAt ? new Date(publishedAt).toLocaleDateString() : ""}
          </div>
        </div>
      </>
    </article>
  );
};