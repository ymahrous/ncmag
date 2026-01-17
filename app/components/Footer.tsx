"use client";
import { useState } from "react";
const API_SECRET = process.env.NEXT_PUBLIC_API_SECRET;

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

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
    }
  };

  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">News</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="/world" target="_blank" className="hover:underline">World</a></li>
            <li><a href="/politics" target="_blank" className="hover:underline">Politics</a></li>
            <li><a href="/business" target="_blank" className="hover:underline">Business</a></li>
            <li><a href="/technology" target="_blank" className="hover:underline">Technology</a></li>
            <li><a href="/sports" target="_blank" className="hover:underline">Sports</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Useful links</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="/about" target="_blank" className="hover:underline">About Us</a></li>
            <li><a href="/contact" target="_blank" className="hover:underline">Contact</a></li>
            <li><a href="/help" target="_blank" className="hover:underline">Help</a></li>
            <li><a href="/terms" target="_blank" className="hover:underline">Terms</a></li>
            <li><a href="/privacy" target="_blank" className="hover:underline">Privacy</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold uppercase mb-4">Newsletter</h3>
          <p className="text-gray-700 mb-2">Get the latest news delivered to your inbox.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="grow border border-gray-300 px-3 py-2 rounded"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
          {message && (<p className="mt-2 text-sm text-gray-700" role="alert">{message}</p>)}
        </div>

        {/* Column 4: Language */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold uppercase mb-4">Language</h3>
          <select className="w-full border border-gray-300 px-3 py-2 rounded">
            <option value="en">English</option>
            {/* 
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option> 
            */}
          </select>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} NewsCast. All rights reserved.
      </div>
    </footer>
  );
}