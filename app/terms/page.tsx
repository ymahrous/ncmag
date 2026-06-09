"use client";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className=”grow max-w-4xl mx-auto px-4 py-16”>
        <h1 className=”text-5xl font-serif font-bold mb-10”>Terms & Conditions</h1>

        <div className=”bg-gray-50 p-8 rounded-lg border border-gray-200 mb-12”>
          <h2 className=”font-bold mb-4 text-sm text-gray-700 uppercase tracking-wider”>Table of Contents</h2>
          <ul className=”space-y-2 text-sm”>
            <li><a href=”#use-of-content” className=”text-blue-600 hover:underline”>1. Use of Content</a></li>
            <li><a href=”#intellectual-property” className=”text-blue-600 hover:underline”>2. Intellectual Property</a></li>
            <li><a href=”#analytics” className=”text-blue-600 hover:underline”>3. Analytics and Performance Monitoring</a></li>
            <li><a href=”#third-party-content” className=”text-blue-600 hover:underline”>4. Third-Party Content and Links</a></li>
            <li><a href=”#legal-compliance” className=”text-blue-600 hover:underline”>5. Legal Compliance and Copyright</a></li>
            <li><a href=”#user-conduct” className=”text-blue-600 hover:underline”>6. User Conduct</a></li>
            <li><a href=”#disclaimers” className=”text-blue-600 hover:underline”>7. Disclaimers and Limitation of Liability</a></li>
            <li><a href=”#indemnification” className=”text-blue-600 hover:underline”>8. Indemnification</a></li>
            <li><a href=”#changes” className=”text-blue-600 hover:underline”>9. Changes to These Terms</a></li>
            <li><a href=”#governing-law” className=”text-blue-600 hover:underline”>10. Governing Law</a></li>
          </ul>
        </div>

        <p className=”mb-10 text-lg text-gray-700 leading-relaxed”>
          Welcome to <strong>News Call Magazine</strong> (“we”, “our”, “us”). By accessing or using our website, applications, or related services (collectively, the “Services”), you agree to comply with these Terms & Conditions (“Terms”). If you do not agree, please do not use our Services.
        </p>

        <section id=”use-of-content” className=”mb-12”>
          <h2 className=”nyt-h2 mb-6”>1. Use of Content</h2>
          <div className=”space-y-4”>
            <p className=”text-gray-700 leading-relaxed”>
              News Call Magazine aggregates and displays news articles and related content (“Content”) from third-party publishers and media outlets. Content is provided for informational and educational purposes only.
            </p>
            <p className=”text-gray-700 leading-relaxed”>
              We do not guarantee the accuracy, completeness, or timeliness of any Content. Users access and rely on Content at their own discretion and risk.
            </p>
          </div>
        </section>

        <section id=”intellectual-property” className=”mb-12”>
          <h2 className=”nyt-h2 mb-6”>2. Intellectual Property</h2>
          <div className=”space-y-4”>
            <p className=”text-gray-700 leading-relaxed”>
              All third-party Content remains the property of its respective owners. News Call Magazine does not claim ownership of aggregated articles, images, videos, or media unless explicitly stated.
            </p>
            <p className=”text-gray-700 leading-relaxed”>
              Our name, branding, logos, website design, and software are protected intellectual property and may not be copied, modified, or redistributed without prior written consent.
            </p>
          </div>
        </section>

        <section id=”analytics” className=”mb-12”>
          <h2 className=”nyt-h2 mb-6”>3. Analytics and Performance Monitoring</h2>
          <div className=”space-y-4”>
            <p className=”text-gray-700 leading-relaxed”>
              To maintain and improve our Services, we use analytics and performance monitoring tools, including website usage metrics and speed insights. These tools help us understand how visitors interact with the site and how the site performs across devices and networks.
            </p>
            <p className=”text-gray-700 leading-relaxed”>
              Collected data is aggregated and anonymized and is not used to personally identify users. It is used solely to improve site functionality, performance, reliability, and content delivery.
            </p>
          </div>
        </section>

        <section id=”third-party-content” className=”mb-12”>
          <h2 className=”nyt-h2 mb-6”>4. Third-Party Content and Links</h2>
          <div className=”space-y-4”>
            <p className=”text-gray-700 leading-relaxed”>
              The Services may contain links to third-party websites or services. We do not control and are not responsible for the content, availability, accuracy, or policies of third-party sites.
            </p>
            <p className=”text-gray-700 leading-relaxed”>
              Accessing third-party content is done at your own risk and is governed by the terms and policies of those third-parties.
            </p>
          </div>
        </section>

        <section id=”legal-compliance” className=”mb-12”>
          <h2 className=”nyt-h2 mb-6”>5. Legal Compliance and Copyright</h2>
          <div className=”space-y-4”>
            <p className=”text-gray-700 leading-relaxed”>
              News Call Magazine respects copyright and intellectual property laws. We aim to credit original sources and link directly to publishers whenever possible.
            </p>
            <p className=”text-gray-700 leading-relaxed”>
              If you are a rights holder and believe your content has been used improperly, please{“ “}
              <Link href=”/contact” className=”font-bold hover:underline”>
                contact
              </Link>{“ “}
              us. We will promptly review and address valid requests.
            </p>
          </div>
        </section>

        <section id=”user-conduct” className=”mb-12”>
          <h2 className=”nyt-h2 mb-6”>6. User Conduct</h2>
          <p className=”text-gray-700 leading-relaxed”>
            You agree not to misuse the Services, including but not limited to attempting unauthorized access, scraping content without permission, distributing malware, or interfering with site functionality or security.
          </p>
        </section>

        <section id=”disclaimers” className=”mb-12”>
          <h2 className=”nyt-h2 mb-6”>7. Disclaimers and Limitation of Liability</h2>
          <div className=”space-y-4”>
            <p className=”text-gray-700 leading-relaxed”>
              The Services are provided on an “as-is” and “as-available” basis without warranties of any kind. We do not guarantee uninterrupted or error-free operation.
            </p>
            <p className=”text-gray-700 leading-relaxed”>
              To the fullest extent permitted by law, News Call Magazine shall not be liable for any indirect, incidental, or consequential damages arising from use of or reliance on the Services or third-party Content.
            </p>
          </div>
        </section>

        <section id=”indemnification” className=”mb-12”>
          <h2 className=”nyt-h2 mb-6”>8. Indemnification</h2>
          <p className=”text-gray-700 leading-relaxed”>
            You agree to indemnify and hold harmless News Call Magazine and its affiliates from any claims, losses, or damages resulting from your use of the Services or violation of these Terms.
          </p>
        </section>

        <section id=”changes” className=”mb-12”>
          <h2 className=”nyt-h2 mb-6”>9. Changes to These Terms</h2>
          <p className=”text-gray-700 leading-relaxed”>
            We may update these Terms at any time. Updates take effect immediately upon posting. Continued use of the Services constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section id=”governing-law” className=”mb-12”>
          <h2 className=”nyt-h2 mb-6”>10. Governing Law</h2>
          <p className=”text-gray-700 leading-relaxed”>
            These Terms apply globally. Users are responsible for complying with all applicable local, national, and international laws when accessing the Services.
          </p>
        </section>

        <section className=”bg-gray-50 p-8 rounded-lg border-t-4 border-gray-900”>
          <h2 className=”nyt-h2 mb-4”>Contact</h2>
          <p className=”text-gray-700 leading-relaxed”>
            If you have questions, concerns, or legal inquiries regarding these Terms, please{“ “}
            <Link href=”/contact” className=”font-bold hover:underline”>
              contact
            </Link>{“ “}
            us.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};