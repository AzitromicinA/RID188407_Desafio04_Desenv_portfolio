import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 px-8 text-center border-t text-sm text-gray-600">
      <div className="flex justify-center space-x-4 mb-2">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
      <p>Copyright ©2025 All rights reserved</p>
    </footer>
  );
}
