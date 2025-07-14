import React from "react";

export default function Hero() {
  return (
    <section className="px-8 py-20 max-w-screen-lg mx-auto text-left">
      <h2 className="text-3xl font-bold mb-2">Olá, eu sou João</h2>
      <p className="text-xl text-gray-700 mb-4">Desenvolvedor Full-stack</p>
      <p className="mb-6 max-w-xl">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
        officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
        nostrud amet.
      </p>
      <a href="#" className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
        Download resume
      </a>
    </section>
  );
}
