"use client";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="grow max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif font-bold mb-10">Privacy Policy</h1>

        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-12">
          <h2 className="font-bold mb-4 text-sm text-gray-700 uppercase tracking-wider">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#information-collection" className="text-blue-600 hover:underline">1. Information We Collect</a></li>
            <li><a href="#use-of-information" className="text-blue-600 hover:underline">2. How We Use Information</a></li>
            <li><a href="#analytics" className="text-blue-600 hover:underline">3. Analytics and Performance Monitoring</a></li>
            <li><a href="#third-party" className="text-blue-600 hover:underline">4. Third-Party Services</a></li>
            <li><a href="#international" className="text-blue-600 hover:underline">5. International Privacy Rights</a></li>
            <li><a href="#security" className="text-blue-600 hover:underline">6. Data Security</a></li>
            <li><a href="#children" className="text-blue-600 hover:underline">7. Children’s Privacy</a></li>
            <li><a href="#changes" className="text-blue-600 hover:underline">8. Changes to This Policy</a></li>
          </ul>
        </div>

        <p className="mb-8 text-lg text-gray-700 leading-relaxed">
          <strong>News Call Magazine</strong> respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website or subscribe to our newsletter.
        </p>

        <section id="information-collection" className="mb-12">
          <h2 className="nyt-h2 mb-6">1. Information We Collect</h2>
          <p className="mb-4 text-gray-700">
            We may collect the following information:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
            <li>Email address, if you voluntarily subscribe to our newsletter</li>
            <li>Anonymous usage data related to website performance and visitor interactions</li>
          </ul>
        </section>

        <section id="use-of-information" className="mb-12">
          <h2 className="nyt-h2 mb-6">2. How We Use Information</h2>
          <p className="mb-4 text-gray-700">
            We use collected information to:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
            <li>Send newsletters and updates you have requested</li>
            <li>Understand how visitors use our website</li>
            <li>Improve site performance, speed, and user experience</li>
          </ul>
        </section>

        <section id="analytics" className="mb-12">
          <h2 className="nyt-h2 mb-6">3. Analytics and Performance Monitoring</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We use analytics and performance monitoring tools (including speed and usage insights) to better understand how our website is accessed and used. These tools collect aggregated and anonymized data such as page visits, device type, and performance metrics.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            This data does not identify individual users and is used solely to improve website functionality, reliability, and content delivery.
          </p>
        </section>

        <section id="third-party" className="mb-12">
          <h2 className="nyt-h2 mb-6">4. Third-Party Services</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            We may use third-party service providers for email delivery, analytics, and performance monitoring. These providers are permitted to process data only as necessary to provide their services and are required to follow applicable privacy standards.
          </p>
        </section>

        <section id="international" className="mb-12">
          <h2 className="nyt-h2 mb-6">5. International Privacy Rights</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            This policy applies globally. Depending on your location, you may have rights to access, correct, or request deletion of your personal data. Requests can be made via our{" "}
            <Link href="/contact" className="font-bold hover:underline">
              contact
            </Link>{" "}
            page.
          </p>
        </section>

        <section id="security" className="mb-12">
          <h2 className="nyt-h2 mb-6">6. Data Security</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            We implement reasonable administrative and technical safeguards to protect your information. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section id="children" className="mb-12">
          <h2 className="nyt-h2 mb-6">7. Children’s Privacy</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            News Call Magazine is not directed to children under the age of 13. We do not knowingly collect personal information from children.
          </p>
        </section>

        <section id="changes" className="mb-12">
          <h2 className="nyt-h2 mb-6">8. Changes to This Policy</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting. Continued use of the website or newsletter indicates acceptance of the updated policy.
          </p>
        </section>

        <section className="bg-gray-50 p-8 rounded-lg border-t-4 border-gray-900">
          <h2 className="nyt-h2 mb-4">Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about this Privacy Policy or wish to unsubscribe from the newsletter, please{" "}
            <Link href="/contact" className="font-bold hover:underline">
              contact
            </Link>{" "}
            us.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};