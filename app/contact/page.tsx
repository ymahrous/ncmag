"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { send } from "@emailjs/browser";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMP_ID;
  const userId = process.env.NEXT_PUBLIC_USER_ID;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear feedback when user types
    setFeedback(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceId || !templateId || !userId) {
      setFeedback({ type: "error", message: "Not configured." });
      console.error("Missing config", { serviceId, templateId, userId });
      return;
    }
    setLoading(true);
    try {
      await send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        userId
      );
      setFormData({ name: "", email: "", message: "" });
      setFeedback({ type: "success", message: "Message sent successfully! We'll get back to you soon." });
      toast.success("Message sent!");
    } catch (error) {
      console.error("Error sending email:", error);
      setFeedback({ type: "error", message: "Unable to send message. Please try again." });
      toast.error("Unable to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="grow max-w-4xl mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4">Get In Touch</h1>
          <p className="text-gray-700">
            Have questions, feedback, or suggestions? We’d love to hear from you.
          </p>
        </section>

        <section className="max-w-xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-gray-700" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Type your message here"
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-6 py-3 border border-black hover:bg-black hover:text-white transition ${
                loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            
            {feedback && (
              <p className={`mt-4 text-center font-medium transition hover:underline ${feedback.type === "success" ? "text-gray-900" : "text-gray-900"}`}>{feedback.message}</p>
            )}
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};