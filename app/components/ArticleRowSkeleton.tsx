export default function ArticleRowSkeleton() {
  return (
    <div className="flex gap-4 py-4 px-3 -mx-3 border-b">
      <div className="flex-1">
        <div className="skeleton h-5 w-16 mb-2" />
        <div className="space-y-2">
          <div className="skeleton h-5 w-full" />
          <div className="skeleton h-5 w-4/5" />
        </div>
        <div className="space-y-1 mt-3">
          <div className="skeleton h-3 w-full" />
          <div className="skeleton h-3 w-full" />
        </div>
        <div className="skeleton h-3 w-32 mt-2" />
      </div>
      <div className="skeleton w-28 h-20 rounded-md hidden sm:block" />
    </div>
  );
}
