"use client";
import { useState } from "react";
import toast from 'react-hot-toast';
import { send } from "@emailjs/browser";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({name: "", email: "", message: ""});
  const serviceId = process.env.SERVICE_ID;
  const templateId = process.env.TEMP_ID;
  const userId = process.env.USER_ID;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if(!serviceId || !templateId || !userId) {
        toast.success("weird");
        return;
      };
      await send(serviceId, templateId, formData, userId);
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Unable to send message. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-6">Contact Us</h1>
        <p className="mb-4 text-gray-700">
          Have questions, feedback, or suggestions? We{"'"}d love to hear from you.
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Email</h2>
          <p className="text-gray-700">support@newscast.org</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-1 text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded"
                rows={5}
                placeholder="Type your message here"
              />
            </div>
            <button type="submit" className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700 transition">Send Message</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};