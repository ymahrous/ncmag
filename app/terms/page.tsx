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
          Welcome to <strong>News Call Magazine</strong> (“we”, “our”, “us”). By accessing or using our website, mobile applications, or other services (collectively, the “Services”), you agree to comply with these Terms and Conditions (“Terms”). If you do not agree, you may not use our Services.
        </p>

        {/* 1. Use of Content */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Content</h2>
        <p className="mb-4 text-gray-700">
          Our Services aggregate news, articles, and other content (“Content”) from multiple media outlets worldwide. We aim to provide accurate and timely information, but we do not guarantee the accuracy, completeness, or reliability of any Content.
        </p>
        <p className="mb-4 text-gray-700">
          All Content belongs to the respective original publishers, authors, or media outlets. Unless expressly stated, we do not claim ownership of third-party content. Users may view, share, and read Content for personal, non-commercial purposes. Any commercial use of Content requires permission from the original publisher.
        </p>

        {/* 2. Intellectual Property */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Intellectual Property</h2>
        <p className="mb-4 text-gray-700">
          Our trademarks, logos, and proprietary software are owned by News Call Magazine or its licensors. You may not reproduce, distribute, modify, create derivative works, or publicly display Content or Services without prior authorization from the relevant rights holder.
        </p>

        {/* 3. Third-Party Content and Links */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Third-Party Content and Links</h2>
        <p className="mb-4 text-gray-700">
          The Services may include links to third-party websites or media outlets. These links are provided for convenience only. We do not control and are not responsible for the content, accuracy, or legality of third-party websites or media outlets. Accessing or using third-party services is at your own risk, and your interactions are governed by the terms of the respective third-party.
        </p>

        {/* 4. Legal Compliance and Licensing */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Legal Compliance and Licensing</h2>
        <p className="mb-4 text-gray-700">
          News Call Magazine respects copyright and intellectual property laws. We strive to properly credit sources and link to original content. If you are a rights holder and believe that your content has been used improperly, please <Link href="/contact" target="_blank" className="hover:underline"><strong>contact</strong></Link> us. We will investigate and remove infringing content promptly.
        </p>
        <p className="mb-4 text-gray-700">
          You agree to use the Services only in accordance with applicable local and international laws.
        </p>

        {/* 5. User Conduct */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">5. User Conduct</h2>
        <p className="mb-4 text-gray-700">
          You agree not to post, share, or transmit any illegal, defamatory, or infringing content, and not to use automated scripts or bots to scrape or collect data from our Services without permission. You also agree not to interfere with the functionality or security of our Services.
        </p>

        {/* 6. Disclaimers and Limitation of Liability */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Disclaimers and Limitation of Liability</h2>
        <p className="mb-4 text-gray-700">
          The Services are provided “as-is” and without warranties of any kind, express or implied. We do not guarantee uninterrupted access to our Services. To the maximum extent permitted by law, News Call Magazine shall not be liable for any indirect, incidental, or consequential damages arising from use of our Services, including reliance on third-party content.
        </p>

        {/* 7. Indemnification */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Indemnification</h2>
        <p className="mb-4 text-gray-700">
          You agree to indemnify, defend, and hold harmless News Call Magazine, its affiliates, officers, and employees from any claims, liabilities, damages, losses, or expenses arising from your use of the Services or violation of these Terms.
        </p>

        {/* 8. Changes */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Changes</h2>
        <p className="mb-4 text-gray-700">
          We reserve the right to update these Terms at any time. The updated Terms will be effective immediately upon posting. Continued use of the Services constitutes acceptance of the revised Terms.
        </p>

        {/* 9. Governing Law */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">9. Governing Law</h2>
        <p className="mb-4 text-gray-700">
          These Terms are intended for a global audience and do not designate any specific national jurisdiction. By using the Services, you agree to comply with all applicable local and international laws.
        </p>

        {/* 10. Copyright & Source Disclaimer */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">10. Copyright & Source Disclaimer</h2>
        <p className="mb-4 text-gray-700">
          All news articles, images, videos, and other media (“Content”) displayed on News Call Magazine are the property of their respective publishers, authors, or media outlets. News Call Magazine does not claim ownership of third-party content.
        </p>
        <p className="mb-4 text-gray-700">
          Whenever possible, we clearly credit the original source of all content, including links to the original publication. Users are encouraged to visit the original source for complete information.
        </p>
        <p className="mb-4 text-gray-700">
          Content is presented on our website for informational, educational, and non-commercial purposes under principles similar to “fair use.” Users may view, share, and cite content for personal or educational purposes. Commercial reproduction, redistribution, or modification of content without permission from the original publisher is strictly prohibited.
        </p>
        <p className="mb-4 text-gray-700">
          If you are the copyright holder of any content displayed on News Call Magazine and believe it has been used without proper authorization, please contact us immediately at <Link href="/contact" target="_blank" className="hover:underline"><strong>contact</strong></Link>. We will investigate and remove or properly attribute content promptly in accordance with applicable copyright law.
        </p>
        <p className="mb-4 text-gray-700">
          News Call Magazine is not responsible for the accuracy, completeness, or legality of third-party content. By accessing our Services, users agree that they assume all responsibility for any reliance on aggregated content.
        </p>

        {/* Contact */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
        <p className="mb-4 text-gray-700">
          If you have questions, concerns, or copyright complaints, please <Link href="/contact" target="_blank" className="hover:underline"><strong>contact</strong></Link> us
        </p>
      </main>

      <Footer />
    </div>
  );
};