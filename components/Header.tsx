"use client";

import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation"; // Sayfa yolunu almak için hook

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // O anki sayfanın yolunu (pathname) alıyoruz. Örn: "/", "/projeler", "/hakkimizda"
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // YENİ VE AKILLI MANTIK BURADA
  // Header'ın "koyu modda" (yani açık renkli yazılarla) olup olmayacağını belirleyen koşul.
  // Sadece anasayfadaysa (pathname === '/') VE sayfa henüz aşağı kaydırılmamışsa (isScrolled === false)
  // header koyu modda olsun. Diğer tüm durumlarda (diğer sayfalar veya anasayfada aşağı kaydırılmış durum)
  // header "açık modda" (koyu renkli yazılarla) olsun.
  const isDarkMode = pathname === "/" && !isScrolled;

  // Koşula göre renk class'larını belirliyoruz.
  const logoColor = isDarkMode ? "text-white" : "text-slate-900";
  const linkColor = isDarkMode ? "text-slate-200" : "text-slate-700";
  const linkHoverColor = isDarkMode
    ? "hover:text-white"
    : "hover:text-slate-900";
  const backgroundColor =
    isScrolled || pathname !== "/" ? "rgba(255, 255, 255, 0.8)" : "transparent";
  const boxShadow =
    isScrolled || pathname !== "/" ? "0 4px 6px -1px rgb(0 0 0 / 0.1)" : "none";

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        padding: isScrolled ? "1rem 1.5rem" : "1.5rem",
        backgroundColor: backgroundColor,
        backdropFilter: isScrolled || pathname !== "/" ? "blur(10px)" : "none",
        boxShadow: boxShadow,
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className={`font-bold text-xl transition-colors duration-300 ${logoColor}`}
        >
          Akgüler Reklam
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link
            href="/projeler"
            className={`transition-colors duration-300 ${linkColor} ${linkHoverColor}`}
          >
            Projeler
          </Link>
          <Link
            href="/hakkimizda"
            className={`transition-colors duration-300 ${linkColor} ${linkHoverColor}`}
          >
            Hakkımızda
          </Link>
          <Link
            href="/iletisim"
            className={`transition-colors duration-300 ${linkColor} ${linkHoverColor}`}
          >
            İletişim
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
