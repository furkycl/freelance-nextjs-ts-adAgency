"use client";

import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        padding: isScrolled ? "1rem 1.5rem" : "1.5rem",
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.8)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        boxShadow: isScrolled ? "0 4px 6px -1px rgb(0 0 0 / 0.1)" : "none",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Akgüler Reklam
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link
            href="/projeler"
            className="hover:text-gray-500 transition-colors"
          >
            Projeler
          </Link>
          <Link
            href="/hakkimda"
            className="hover:text-gray-500 transition-colors"
          >
            Hakkımızda
          </Link>
          <Link
            href="/iletisim"
            className="hover:text-gray-500 transition-colors"
          >
            İletişim
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
