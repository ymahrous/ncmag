"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
const FAQS = [
  {
    question: "What is News Call Magazine?",
    answer:
      "News Call Magazine is a news aggregation platform that curates and highlights stories from a variety of trusted third-party publishers, making it easier to discover relevant and trending news in one place.",
  },
  {
    question: "How do I submit a news tip or suggestion?",
    answer:
      "You can submit news tips or story suggestions through our contact page. Please include as much relevant information and sources as possible so we can review it properly.",
  },
  {
    question: "Does News Call Magazine publish original articles?",
    answer:
      "News Call Magazine primarily aggregates and links to articles published by third-party news outlets. Any original content is clearly labeled as such.",
  },
  {
    question: "Can I republish content from News Call Magazine?",
    answer:
      "News Call Magazine does not own the rights to third-party articles displayed on the site. For republishing or reuse, please contact the original publisher directly.",
  },
  {
    question: "How do I subscribe to the newsletter?",
    answer:
      "You can subscribe to our newsletter by entering your email address in the signup form at the bottom of the site.",
  },
  {
    question: "How often is News Call Magazine updated?",
    answer:
      "The site is updated regularly, with new articles fetched daily from trusted news sources to keep content fresh and timely.",
  },
  {
    question: "Is News Call Magazine free to use?",
    answer:
      "Yes, News Call Magazine is completely free to browse and does not require an account to read or discover articles.",
  },
  {
    question: "How can I unsubscribe from the newsletter?",
    answer:
      "Every newsletter email includes an unsubscribe link at the bottom. You can use it at any time to stop receiving emails.",
  },
];

export default function HelpPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-6">Frequently Asked Questions</h1>
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