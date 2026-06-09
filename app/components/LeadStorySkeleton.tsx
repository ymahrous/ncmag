export default function LeadStorySkeleton() {
  return (
    <article className="grid md:grid-cols-1 gap-6 pb-8 mb-8 border-b-2 border-gray-200 -mx-3 px-3 py-3 rounded-sm">
      <div className="skeleton w-full h-72 rounded-md" />
      <div>
        <div className="skeleton h-6 w-20 mb-4" />
        <div className="space-y-3">
          <div className="skeleton h-10 w-full" />
          <div className="skeleton h-10 w-5/6" />
        </div>
        <div className="space-y-2 mt-4">
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-3/4" />
        </div>
        <div className="skeleton h-4 w-40 mt-4" />
      </div>
    </article>
  );
}
