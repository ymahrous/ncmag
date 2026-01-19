"use client";
import Link from "next/link";
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
            <li><Link href="/world" target="_blank" className="hover:underline">World</Link></li>
            <li><Link href="/politics" target="_blank" className="hover:underline">Politics</Link></li>
            <li><Link href="/business" target="_blank" className="hover:underline">Business</Link></li>
            <li><Link href="/technology" target="_blank" className="hover:underline">Technology</Link></li>
            <li><Link href="/sports" target="_blank" className="hover:underline">Sports</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Useful links</h3>
          <ul className="space-y-2 text-gray-700">
            <li><Link href="/about" target="_blank" className="hover:underline">About Us</Link></li>
            <li><Link href="/contact" target="_blank" className="hover:underline">Contact</Link></li>
            <li><Link href="/help" target="_blank" className="hover:underline">Help</Link></li>
            <li><Link href="/terms" target="_blank" className="hover:underline">Terms</Link></li>
            <li><Link href="/privacy" target="_blank" className="hover:underline">Privacy</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold uppercase mb-4">Newsletter</h3>
          <p className="text-gray-700 mb-2">Get the latest news delivered to your inbox.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="grow border border-gray-300 px-3 py-2"
            />
            <button
              type="submit"
              className="inline-block border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
          {message && (<p className="mt-2 text-sm text-gray-700" role="alert">{message}</p>)}
        </div>

        {/* Column 4: Language */}
        {/* <div className="md:col-span-3">
          <h3 className="text-lg font-bold uppercase mb-4">Language</h3>
          <select className="w-full border border-gray-300 px-3 py-2 rounded">
            <option value="en">English</option>
            
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option> 
           
          </select>
        </div> */}
      </div>

      <div className="border-t border-gray-300 mt-8 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} {"News Call Magazine"}. All rights reserved.
      </div>
    </footer>
  );
}