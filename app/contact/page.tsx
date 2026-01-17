"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-6">Contact Us</h1>
        <p className="mb-4 text-gray-700">
          Have questions, feedback, or suggestions? We’d love to hear from you.
        </p>
        {/* <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Email</h2>
          <p className="text-gray-700">support@yournewssite.com</p>
        </section> */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 px-3 py-2 rounded"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 px-3 py-2 rounded"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Message</label>
              <textarea
                className="w-full border border-gray-300 px-3 py-2 rounded"
                rows={5}
                placeholder="Type your message here"
              />
            </div>
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};