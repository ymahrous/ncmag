"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-6">About Us</h1>
        <p className="mb-4 text-gray-700">
          Welcome to {"NewsCast."}, your go-to destination for curated news from around the world.
          Our mission is to provide timely, accurate, and comprehensive news coverage to keep you informed.
        </p>
        <p className="mb-4 text-gray-700">
          We gather articles from trusted sources and organize them by categories including politics, business, technology, sports, and more.
        </p>
        <p className="mb-4 text-gray-700">
          Our team is committed to delivering a clean reading experience with easy navigation and mobile-friendly layouts.
        </p>
      </main>

      <Footer />
    </div>
  );
};