"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="grow max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4 text-gray-700">
          {"NewsCast."} respects your privacy. This policy explains how we collect, use, and protect your information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information Collection</h2>
        <p className="mb-4 text-gray-700">
          We may collect information you provide when signing up for newsletters or contacting us, such as your email address.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Use of Information</h2>
        <p className="mb-4 text-gray-700">
          Your information is used solely to provide services, send newsletters, and improve user experience. We do not sell or share your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Cookies & Tracking</h2>
        <p className="mb-4 text-gray-700">
          We use cookies and analytics tools to improve site performance and understand user behavior.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
        <p className="mb-4 text-gray-700">
          We may use third-party services for analytics or hosting, who are bound by strict privacy standards.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Changes to Policy</h2>
        <p className="mb-4 text-gray-700">
          We reserve the right to update this policy at any time. Continued use constitutes acceptance of the updated policy.
        </p>
      </main>

      <Footer />
    </div>
  );
};