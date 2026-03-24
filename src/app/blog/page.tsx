import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Blog — IEEE RAS (Silchar Subsection)",
  description:
    "Read updates, highlights, and articles from IEEE RAS Silchar Subsection.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A192F" }}>
      <Header />
      <main className="mx-auto max-w-6xl px-4 pt-10 pb-20 text-white">
        <h1 className="text-3xl font-bold md:text-4xl">Blog</h1>
        <p className="mt-4 max-w-3xl text-gray-300">
          Chapter news, technical articles, and event highlights will be
          published here.
        </p>
      </main>
      <Footer />
    </div>
  );
}
