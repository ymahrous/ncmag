"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow max-w-6xl mx-auto px-4 py-12 space-y-12">
        <section className="text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Your go-to destination for diverse news from around the world. Our mission is to provide
            a comprehensive news coverage so you stay informed wherever you are.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-2">
            At News Call Magazine, we believe in delivering news that matters. We aim to present
            information in a clear, unbiased, and accessible way for readers worldwide.
          </p>
          <p className="text-gray-700">
            We carefully select and organize articles from trusted sources, covering categories
            like politics, business, technology, sports, and more.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Accuracy</h3>
              <p className="text-gray-700">
                We prioritize credible sources and information that are fact-checked.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Timeliness</h3>
              <p className="text-gray-700">
                News moves fast. We strive to deliver updates quickly while maintaining quality.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-700">
                Our platform is designed for reading on any device, keeping navigation simple and intuitive.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
          <p className="text-gray-700 mb-4">
            We are a dedicated team of editors, curators, and developers passionate about providing
            the best news experience possible. From sourcing articles to designing a clean layout,
            our focus is on quality and user satisfaction.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team members */}
            {/* <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-2 rounded-full bg-gray-200"></div>
              <h4 className="font-semibold">Alex Johnson</h4>
              <p className="text-gray-500 text-sm">Editor-in-Chief</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-2 rounded-full bg-gray-200"></div>
              <h4 className="font-semibold">Maria Rodriguez</h4>
              <p className="text-gray-500 text-sm">Lead Curator</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-2 rounded-full bg-gray-200"></div>
              <h4 className="font-semibold">James Lee</h4>
              <p className="text-gray-500 text-sm">Frontend Developer</p>
            </div> */}
          </div>
        </section>

        {/* <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
          <p className="text-gray-700">
            Stay informed by subscribing to our newsletter — curated global news delivered straight to your inbox.
          </p>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};