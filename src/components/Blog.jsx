import React, { useState } from "react";

const posts = [
  {
    title: "Making a design system from scratch",
    date: "12 Feb 2020",
    tags: ["Design", "Pattern"],
    summary: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
  },
  {
    title: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2020",
    tags: ["Figma", "Icon Design"],
    summary: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
  }
];

export default function Blog() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <section className="bg-blue-50 py-10 px-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Blog</h3>
        <button onClick={() => setShowPosts(!showPosts)} className="text-sm text-blue-600 underline">
          {showPosts ? "Ocultar" : "Mostrar"}
        </button>
      </div>
      {showPosts && (
        <div className="grid md:grid-cols-2 gap-4">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h4 className="font-bold mb-2">{post.title}</h4>
              <p className="text-sm text-gray-500 mb-1">{post.date} - {post.tags.join(", ")}</p>
              <p className="text-sm text-gray-700">{post.summary}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
