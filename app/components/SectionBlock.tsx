import { RawArticle } from "@/types/article";
import ArticleRow from "./ArticleRow";

export default function SectionBlock({ title, articles }: any) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-serif font-bold pt-4 mb-4">{title}</h2>
      <div>
        {articles.slice(0, 5).map((a: RawArticle) => (
          <ArticleRow key={a.url} {...a} />
        ))}
      </div>
    </section>
  );
}