"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="grow max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-6">Terms of Service</h1>

        <p className="mb-4 text-gray-700">
          By using {"NewsCast."}, you agree to comply with and be bound by the following terms and conditions:
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Content</h2>
        <p className="mb-4 text-gray-700">
          All news articles are sourced from third-party providers. You may not reproduce content without proper attribution to the original publisher.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. User Conduct</h2>
        <p className="mb-4 text-gray-700">
          You agree to use the site responsibly and not engage in any activity that could harm the site or its users.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Limitation of Liability</h2>
        <p className="mb-4 text-gray-700">
          Newscast. is not responsible for the accuracy of third-party content and disclaims liability for any damages resulting from the use of this site.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Changes</h2>
        <p className="mb-4 text-gray-700">
          We reserve the right to modify these terms at any time. Continued use of the site constitutes acceptance of the updated terms.
        </p>
      </main>

      <Footer />
    </div>
  );
};