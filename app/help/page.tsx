"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
const FAQS = [
  {
    question: "How do I submit a news tip?",
    answer: "You can send news tips via contact with all relevant details.",
  },
  {
    question: "Can I republish articles from your site?",
    answer:
      "All articles are sourced from third-party publishers. Please contact the original publisher for permission to republish.",
  },
  {
    question: "How do I subscribe to your newsletter?",
    answer: "Click the newsletter signup in the down below and enter your email to subscribe.",
  },
  {
    question: "How often is the site updated?",
    answer: "Our team fetches new articles multiple times per day from trusted sources.",
  },
];

export default function HelpPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-6">Help | FAQ</h1>
        <section className="space-y-6">
          {FAQS.map((faq, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold mb-1">{faq.question}</h2>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}