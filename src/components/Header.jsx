import React from "react";

export default function Header() {
  return (
    <header className="flex justify-end items-center py-6 px-8 bg-white shadow">
      <nav className="space-x-6 text-sm text-gray-700">
        <a href="#" className="hover:underline">Projetos</a>
        <a href="#" className="hover:underline">Blog</a>
        <a href="#" className="hover:underline">Contato</a>
      </nav>
    </header>
  );
}
