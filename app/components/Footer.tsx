"use client";
import Link from "next/link";
import { useState } from "react";
const API_SECRET = process.env.NEXT_PUBLIC_API_SECRET;

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_SECRET || "",
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.success) {
        setMessage("Subscribed successfully!");
        setEmail("");
      } else {
        setMessage(data.error || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white border-t-2 border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Newsletter Section */}
        <section className="py-16 border-b-2 border-gray-200">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-serif font-bold mb-4">Stay Informed</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Subscribe to our newsletter for weekly curated news delivered to your inbox.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="form-input flex-1"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary whitespace-nowrap"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {message && (
            <p className={`text-sm mt-3 text-center ${message.includes("error") || message.includes("Something") || message.includes("Server") ? "text-red-600" : "text-green-600"}`}>
              {message}
            </p>
          )}
        </section>

        {/* Links Section */}
        <section className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* News Categories */}
            <div>
              <h3 className="text-sm font-bold uppercase mb-6 text-gray-900 tracking-wider">Categories</h3>
              <ul className="space-y-3">
                <li><Link href="/world" className="text-gray-700 hover:text-black transition">World</Link></li>
                <li><Link href="/politics" className="text-gray-700 hover:text-black transition">Politics</Link></li>
                <li><Link href="/business" className="text-gray-700 hover:text-black transition">Business</Link></li>
                <li><Link href="/technology" className="text-gray-700 hover:text-black transition">Technology</Link></li>
                <li><Link href="/sports" className="text-gray-700 hover:text-black transition">Sports</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-bold uppercase mb-6 text-gray-900 tracking-wider">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-700 hover:text-black transition">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-700 hover:text-black transition">Contact</Link></li>
                <li><Link href="/help" className="text-gray-700 hover:text-black transition">Help & FAQ</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-bold uppercase mb-6 text-gray-900 tracking-wider">Legal</h3>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-gray-700 hover:text-black transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-700 hover:text-black transition">Terms & Conditions</Link></li>
                <li><Link href="/unsubscribe" className="text-gray-700 hover:text-black transition">Unsubscribe</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-bold uppercase mb-6 text-gray-900 tracking-wider">Resources</h3>
              <ul className="space-y-3">
                <li><a href="https://github.com/ymahrous/ncmag" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition">Source Code</a></li>
                <li><a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition">Built with Next.js</a></li>
                <li><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition">Deployed on Vercel</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="border-t-2 border-gray-200 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm text-gray-700 font-medium">&copy; {new Date().getFullYear()} News Call Magazine. All rights reserved.</p>
              <p className="text-sm text-gray-600 mt-1">Bringing quality news with integrity and clarity.</p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
              <div className="flex items-center gap-1 px-3 py-2 bg-gray-50 rounded border border-gray-200">
                {/* <span>✓</span> */}
                <span className="font-medium">Curated News</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-2 bg-gray-50 rounded border border-gray-200">
                {/* <span>🔒</span> */}
                <span className="font-medium">SSL-Secure</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-2 bg-gray-50 rounded border border-gray-200">
                {/* <span>📰</span> */}
                <span className="font-medium">Ad-Free</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
