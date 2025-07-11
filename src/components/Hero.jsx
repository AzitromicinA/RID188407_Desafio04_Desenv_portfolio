import React from "react";

export default function Hero() {
  return (
    <section className="px-8 py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4">Olá, eu sou João</h2>
      <p className="text-xl text-gray-700 mb-6">Desenvolvedor Full-stack</p>
      <p className="mb-6 max-w-xl mx-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br></br>
        sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <a href="#" className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">Download resume</a>
    </section>
  );
}
