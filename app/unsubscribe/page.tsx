"use client";
import Link from "next/link";
import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useSearchParams } from "next/navigation";

export default function UnsubscribePage() {
  const searchParams = useSearchParams();
  const emailFromUrl = searchParams.get("email");
  const [email, setEmail] = useState(emailFromUrl || "");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_SECRET || "",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setMessage("You have been successfully unsubscribed from our newsletter.");
      } else {
        setStatus("error");
        setMessage(data.error || "Unable to unsubscribe. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again later.");
      console.error("Unsubscribe error:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-center font-bold mb-6">Unsubscribe from Newsletter</h1>
        {status === "success" ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <p className="text-green-800 mb-4">{message}</p>
            <p className="text-gray-700">
              We{"’"}re sorry to see you go! You will no longer receive newsletters from News Call Magazine.
            </p>
            <Link 
              href="/" 
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              Return to homepage
            </Link>
          </div>
        ) : (
          <>
            <p className="mb-6 text-gray-700">
              We{"’"}re sorry to see you go. Enter your email address below to unsubscribe from our newsletter.
            </p>
            <form onSubmit={handleUnsubscribe} className="mb-6">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                  disabled={status === "loading"}
                />
              </div>
              {status === "error" && (
                <div className="mb-4 bg-red-50 border border-red-200 p-4">
                  <p className="text-red-800">{message}</p>
                </div>
              )}
              <button type="submit" disabled={status === "loading"} className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {status === "loading" ? "Unsubscribing..." : "Unsubscribe"}
              </button>
            </form>
            <p className="text-sm text-center text-gray-600">
              <Link href="/" className="mt-8 inline-block border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition">Back to Home</Link>
            </p>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export const dynamic = "force-dynamic";