"use client";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("English");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Subscribed ${email} to newsletter!`);
    setEmail("");
  };

  return (
    <footer className="bg-white border-t border-gray-200 mt-12 flex-shrink-0">
      <div className="nyt-container py-8 text-sm text-gray-500 flex flex-col md:flex-row md:justify-between gap-6">
        {/* Left: Copyright */}
        <div className="flex-1">
          &copy; {new Date().getFullYear()} NewsCast. All rights reserved.
        </div>

        {/* Center: Links */}
        <div className="flex flex-wrap gap-4 flex-1 justify-center md:justify-start">
          <a href="/about" className="hover:underline">About</a>
          <a href="/help" className="hover:underline">Help</a>
          <a href="/terms" className="hover:underline">Terms</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

        {/* Right: Language Dropdown */}
        <div className="flex-1 flex justify-end">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>Deutsch</option>
            <option>中文</option>
          </select>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="nyt-container py-6 border-t border-gray-200 flex flex-col md:flex-row md:items-center gap-4">
        <span className="text-gray-500 text-sm flex-1">
          Subscribe to our newsletter for the latest news.
        </span>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-2 flex-1 md:flex-1"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded flex-1 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Optional Note */}
      <div className="nyt-container py-4 text-xs text-gray-400 text-center">
        Designed for desktop and mobile. No ads.
      </div>
    </footer>
  );
}