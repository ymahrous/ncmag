"use client";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="grow max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4 text-gray-700">
          <strong>News Call Magazine</strong> respects your privacy. This policy explains how we handle your email address if you choose to subscribe to our newsletter.
        </p>

        {/* 1. Information Collection */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information Collection</h2>
        <p className="mb-4 text-gray-700">
          We only collect the email address you voluntarily provide when subscribing to our newsletter.
        </p>

        {/* 2. Use of Information */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Use of Information</h2>
        <p className="mb-4 text-gray-700">
          Your email address is used exclusively to send newsletters and updates you have requested. We do not sell, trade, or share your email with third parties for marketing purposes.
        </p>

        {/* 3. Third-Party Services */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Third-Party Services</h2>
        <p className="mb-4 text-gray-700">
          We may use third-party email providers to send newsletters. These providers are bound by strict privacy standards and may only use your email to deliver the newsletter.
        </p>

        {/* 4. International Compliance */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">4. International Compliance</h2>
        <p className="mb-4 text-gray-700">
          This policy applies globally. Users may request access to, correction of, or removal of their email address at any time by contacting us at <Link href="/contact" target="_blank" className="hover:underline"><strong>contact</strong></Link>.
        </p>

        {/* 5. Data Security */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Data Security</h2>
        <p className="mb-4 text-gray-700">
          We implement reasonable safeguards to protect your email address. However, no method of electronic transmission is completely secure, and we cannot guarantee absolute security.
        </p>

        {/* 6. Children’s Privacy */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Children{"’"}s Privacy</h2>
        <p className="mb-4 text-gray-700">
          Our newsletter is not directed to children under 13. We do not knowingly collect email addresses from children.
        </p>

        {/* 7. Changes to Policy */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to Policy</h2>
        <p className="mb-4 text-gray-700">
          We may update this Privacy Policy at any time. Updated policies will take effect immediately upon posting. Continued subscription constitutes acceptance of the revised policy.
        </p>

        {/* Contact */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
        <p className="mb-4 text-gray-700">
          If you have questions, concerns, or wish to unsubscribe from the newsletter, please <Link href="/contact" target="_blank" className="hover:underline"><strong>contact</strong></Link> us.
        </p>
      </main>

      <Footer />
    </div>
  );
}