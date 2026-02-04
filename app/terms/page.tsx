"use client";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-6">Terms & Conditions</h1>
        <p className="mb-4 text-gray-700">
          Welcome to <strong>News Call Magazine</strong> (“we”, “our”, “us”). By accessing or using our website, applications, or related services (collectively, the “Services”), you agree to comply with these Terms & Conditions (“Terms”). If you do not agree, please do not use our Services.
        </p>

        {/* 1. Use of Content */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Content</h2>
        <p className="mb-4 text-gray-700">
          News Call Magazine aggregates and displays news articles and related content (“Content”) from third-party publishers and media outlets. Content is provided for informational and educational purposes only.
        </p>
        <p className="mb-4 text-gray-700">
          We do not guarantee the accuracy, completeness, or timeliness of any Content. Users access and rely on Content at their own discretion and risk.
        </p>

        {/* 2. Intellectual Property */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Intellectual Property</h2>
        <p className="mb-4 text-gray-700">
          All third-party Content remains the property of its respective owners. News Call Magazine does not claim ownership of aggregated articles, images, videos, or media unless explicitly stated.
        </p>
        <p className="mb-4 text-gray-700">
          Our name, branding, logos, website design, and software are protected intellectual property and may not be copied, modified, or redistributed without prior written consent.
        </p>

        {/* 3. Analytics and Performance Monitoring */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Analytics and Performance Monitoring</h2>
        <p className="mb-4 text-gray-700">
          To maintain and improve our Services, we use analytics and performance monitoring tools, including website usage metrics and speed insights. These tools help us understand how visitors interact with the site and how the site performs across devices and networks.
        </p>
        <p className="mb-4 text-gray-700">
          Collected data is aggregated and anonymized and is not used to personally identify users. It is used solely to improve site functionality, performance, reliability, and content delivery.
        </p>

        {/* 4. Third-Party Content and Links */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Content and Links</h2>
        <p className="mb-4 text-gray-700">
          The Services may contain links to third-party websites or services. We do not control and are not responsible for the content, availability, accuracy, or policies of third-party sites.
        </p>
        <p className="mb-4 text-gray-700">
          Accessing third-party content is done at your own risk and is governed by the terms and policies of those third-parties.
        </p>

        {/* 5. Legal Compliance and Copyright */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Legal Compliance and Copyright</h2>
        <p className="mb-4 text-gray-700">
          News Call Magazine respects copyright and intellectual property laws. We aim to credit original sources and link directly to publishers whenever possible.
        </p>
        <p className="mb-4 text-gray-700">
          If you are a rights holder and believe your content has been used improperly, please{" "}
          <Link href="/contact" target="_blank" className="hover:underline">
            <strong>contact</strong>
          </Link>{" "}
          us. We will promptly review and address valid requests.
        </p>

        {/* 6. User Conduct */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">6. User Conduct</h2>
        <p className="mb-4 text-gray-700">
          You agree not to misuse the Services, including but not limited to attempting unauthorized access, scraping content without permission, distributing malware, or interfering with site functionality or security.
        </p>

        {/* 7. Disclaimers and Limitation of Liability */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Disclaimers and Limitation of Liability</h2>
        <p className="mb-4 text-gray-700">
          The Services are provided on an “as-is” and “as-available” basis without warranties of any kind. We do not guarantee uninterrupted or error-free operation.
        </p>
        <p className="mb-4 text-gray-700">
          To the fullest extent permitted by law, News Call Magazine shall not be liable for any indirect, incidental, or consequential damages arising from use of or reliance on the Services or third-party Content.
        </p>

        {/* 8. Indemnification */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Indemnification</h2>
        <p className="mb-4 text-gray-700">
          You agree to indemnify and hold harmless News Call Magazine and its affiliates from any claims, losses, or damages resulting from your use of the Services or violation of these Terms.
        </p>

        {/* 9. Changes to Terms */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">9. Changes to These Terms</h2>
        <p className="mb-4 text-gray-700">
          We may update these Terms at any time. Updates take effect immediately upon posting. Continued use of the Services constitutes acceptance of the revised Terms.
        </p>

        {/* 10. Governing Law */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">10. Governing Law</h2>
        <p className="mb-4 text-gray-700">
          These Terms apply globally. Users are responsible for complying with all applicable local, national, and international laws when accessing the Services.
        </p>

        {/* Contact */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
        <p className="mb-4 text-gray-700">
          If you have questions, concerns, or legal inquiries regarding these Terms, please{" "}<Link href="/contact" target="_blank" className="hover:underline"><strong>contact</strong></Link>{" "}us.
        </p>
      </main>
      <Footer />
    </div>
  );
};