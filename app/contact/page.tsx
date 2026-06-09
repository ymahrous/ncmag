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

      <main className="grow bg-gradient-to-br from-gray-50 to-white">
        {/* Header Section */}
        <section className="bg-white border-b border-gray-200 py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-serif font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We would love to hear from you. Whether you have questions, feedback, or suggestions,
              our team is here to help. Send us a message and we shall respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <h2 className="text-2xl font-serif font-bold mb-8">Other Ways to Reach Us</h2>

                <div className="space-y-8">
                  {/* Email */}
                  {/* <div className="p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                    <div className="text-3xl mb-3">📧</div>
                    <h3 className="font-bold mb-2 text-gray-900">Email</h3>
                    <p className="text-sm text-gray-600 mb-3">Send us an email anytime</p>
                    <a href="mailto:hello@newscallmagazine.com" className="text-blue-600 hover:underline font-medium">
                      hello@newscallmagazine.com
                    </a>
                  </div> */}

                  {/* Social */}
                  {/* <div className="p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                    <div className="text-3xl mb-3">🐦</div>
                    <h3 className="font-bold mb-2 text-gray-900">Social Media</h3>
                    <p className="text-sm text-gray-600 mb-3">Follow us for updates</p>
                    <div className="space-y-1">
                      <a href="#" className="block text-blue-600 hover:underline font-medium text-sm">
                        Twitter / X
                      </a>
                      <a href="#" className="block text-blue-600 hover:underline font-medium text-sm">
                        LinkedIn
                      </a>
                    </div>
                  </div> */}

                  {/* Response Time */}
                  <div className="p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
                    {/* <div className="text-3xl mb-3">⏱️</div> */}
                    <h3 className="font-bold mb-2 text-gray-900">Response Time</h3>
                    <p className="text-sm text-gray-700">
                      We typically respond within <strong>24-48 hours</strong> during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 sm:p-10 border-2 border-gray-200 rounded-lg shadow-sm">
                <h2 className="text-2xl font-serif font-bold mb-8">Send us a Message</h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div>
                    <label className="form-label" htmlFor="name">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="form-input w-full text-base"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="form-label" htmlFor="email">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="form-input w-full text-base"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="form-label" htmlFor="message">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={7}
                      placeholder="Tell us what's on your mind... (minimum 10 characters)"
                      className="form-input w-full resize-none text-base"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      {formData.message.length} characters
                    </p>
                  </div>

                  {/* Feedback Messages */}
                  {feedback && (
                    <div className={`alert ${feedback.type === "success" ? "alert-success" : "alert-error"}`}>
                      {feedback.message}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-3 text-base font-semibold"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="inline-block animate-spin">⏳</span>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-6">
                  We respect your privacy. Your information will only be used to respond to your inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
