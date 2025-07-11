import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-8 bg-white shadow">
      <h1 className="text-xl font-bold">Template 03</h1>
      <nav className="space-x-4">
        <a href="#" className="text-gray-700 hover:underline">Projetos</a>
        <a href="#" className="text-gray-700 hover:underline">Blog</a>
        <a href="#" className="text-gray-700 hover:underline">Contato</a>
      </nav>
    </header>
  );
}
