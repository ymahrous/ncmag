"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow max-w-4xl mx-auto px-4 py-16 space-y-16">
        <section className="text-center">
          <h1 className="text-5xl font-serif font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Your go-to destination for diverse news from around the world. Our mission is to provide
            a comprehensive news coverage so you stay informed wherever you are.
          </p>
        </section>

        <section>
          <h2 className="nyt-h2 mb-8">Our Mission</h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              At News Call Magazine, we believe in delivering news that matters. We aim to present
              information in a clear, unbiased, and accessible way for readers worldwide.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We carefully select and organize articles from trusted sources, covering categories
              like politics, business, technology, sports, and more.
            </p>
          </div>
        </section>

        <section>
          <h2 className="nyt-h2 mb-10">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border-2 border-gray-200 rounded-lg hover:shadow-lg hover:border-gray-300 transition-all">
              <h3 className="text-xl font-serif font-bold mb-4">Accuracy</h3>
              <p className="text-gray-700 leading-relaxed">
                We prioritize credible sources and information that are fact-checked.
              </p>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-lg hover:shadow-lg hover:border-gray-300 transition-all">
              <h3 className="text-xl font-serif font-bold mb-4">Timeliness</h3>
              <p className="text-gray-700 leading-relaxed">
                News moves fast. We strive to deliver updates quickly while maintaining quality.
              </p>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-lg hover:shadow-lg hover:border-gray-300 transition-all">
              <h3 className="text-xl font-serif font-bold mb-4">Accessibility</h3>
              <p className="text-gray-700 leading-relaxed">
                Our platform is designed for reading on any device, keeping navigation simple and intuitive.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="nyt-h2 mb-8">Our Team</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We are a dedicated team of editors, curators, and developers passionate about providing
            the best news experience possible. From sourcing articles to designing a clean layout,
            our focus is on quality and user satisfaction.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};