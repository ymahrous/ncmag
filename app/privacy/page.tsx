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
          <strong>News Call Magazine</strong> respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website or subscribe to our newsletter.
        </p>

        {/* 1. Information Collection */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4 text-gray-700">
          We may collect the following information:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li>Email address, if you voluntarily subscribe to our newsletter</li>
          <li>Anonymous usage data related to website performance and visitor interactions</li>
        </ul>

        {/* 2. Use of Information */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Information</h2>
        <p className="mb-4 text-gray-700">
          We use collected information to:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li>Send newsletters and updates you have requested</li>
          <li>Understand how visitors use our website</li>
          <li>Improve site performance, speed, and user experience</li>
        </ul>

        {/* 3. Analytics and Performance Monitoring */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Analytics and Performance Monitoring</h2>
        <p className="mb-4 text-gray-700">
          We use analytics and performance monitoring tools (including speed and usage insights) to better understand how our website is accessed and used. These tools collect aggregated and anonymized data such as page visits, device type, and performance metrics.
        </p>
        <p className="mb-4 text-gray-700">
          This data does not identify individual users and is used solely to improve website functionality, reliability, and content delivery.
        </p>

        {/* 4. Third-Party Services */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
        <p className="mb-4 text-gray-700">
          We may use third-party service providers for email delivery, analytics, and performance monitoring. These providers are permitted to process data only as necessary to provide their services and are required to follow applicable privacy standards.
        </p>

        {/* 5. International Compliance */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">5. International Privacy Rights</h2>
        <p className="mb-4 text-gray-700">
          This policy applies globally. Depending on your location, you may have rights to access, correct, or request deletion of your personal data. Requests can be made via our{" "}
          <Link href="/contact" target="_blank" className="hover:underline">
            <strong>contact</strong>
          </Link>{" "}
          page.
        </p>

        {/* 6. Data Security */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Data Security</h2>
        <p className="mb-4 text-gray-700">
          We implement reasonable administrative and technical safeguards to protect your information. However, no method of transmission over the internet is 100% secure.
        </p>

        {/* 7. Children’s Privacy */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Children{"’"}s Privacy</h2>
        <p className="mb-4 text-gray-700">
          News Call Magazine is not directed to children under the age of 13. We do not knowingly collect personal information from children.
        </p>

        {/* 8. Changes to Policy */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Changes to This Policy</h2>
        <p className="mb-4 text-gray-700">
          We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting. Continued use of the website or newsletter indicates acceptance of the updated policy.
        </p>

        {/* Contact */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
        <p className="mb-4 text-gray-700">
          If you have questions about this Privacy Policy or wish to unsubscribe from the newsletter, please{" "}
          <Link href="/contact" target="_blank" className="hover:underline">
            <strong>contact</strong>
          </Link>{" "}
          us.
        </p>
      </main>

      <Footer />
    </div>
  );
};