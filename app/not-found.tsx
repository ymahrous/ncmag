import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function NotFound() {
  return (
    <div>
      <Header />
      <main className="grow nyt-container">
        <section className="flex flex-col items-center justify-center py-24 text-center">
          <p className="uppercase tracking-wide text-sm text-gray-500">Page not found</p>
          <h1 className="nyt-h2 mt-4">We can{"’"}t find the page you{"’"}re looking for</h1>
          <p className="mt-4 max-w-xl text-gray-600">
            The page may have been moved, deleted, or never existed.<br />Try returning to the homepage to continue reading.
          </p>
          <Link href="/" className="mt-8 inline-block border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition">Back to Home</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};