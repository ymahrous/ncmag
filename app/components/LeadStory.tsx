import { RawArticle } from "@/types/article";

export default function LeadStory({title, description, url, source, imageUrl, publishedAt}: RawArticle) {
  return (
    <article className="grid md:grid-cols-2 gap-6 border-b pb-6 mb-8">
      {imageUrl && (<img src={imageUrl} alt={title} className="w-full h-72 object-cover" />)}
      <div>
        {/* <span className="text-xs uppercase text-red-700 font-semibold">
          {category}
        </span> */}
        <h1 className="text-4xl font-serif font-bold leading-tight mt-2">
          <a href={url} target="_blank">{title}</a>
        </h1>
        <p className="mt-3 text-gray-700 text-base">{description}</p>
        <div className="mt-4 text-sm text-gray-500">
          {source?.toString()} · {" "}{publishedAt ? new Date(publishedAt).toLocaleDateString() : ""}
        </div>
      </div>
    </article>
  );
};