"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PiListBold, PiXBold } from "react-icons/pi";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="z-[10000] sticky top-0 w-full flex justify-between items-center p-6 bg-white">
      {/* Logo */}
      <Link
        className="hover:ring-2 hover:ring-pink-300 rounded-full shrink-0"
        href="/"
      >
        <Image
          className="bg-zinc-100 rounded-full"
          src="/pictures/logo.png"
          alt="Marys Bean"
          width={100}
          height={100}
        />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-50 hover:text-orange-900"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <PiXBold size={32} /> : <PiListBold size={32} />}
      </button>

      {/* Nav Links - Desktop */}
      <nav className="hidden md:flex flex-row gap-4 flex-wrap justify-center">
        <NavLink href="/about">Sobre</NavLink>
        <NavLink href="/merch">Consultas</NavLink>
        <NavLink href="/gallery">Recursos</NavLink>
        <NavLink href="/contact">Contactos</NavLink>
      </nav>

      {/* Nav Links - Mobile */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 flex flex-col items-center gap-2 py-4 bg-white text-lg">
          <NavLink href="/about" onClick={handleLinkClick}>Sobre</NavLink>
          <NavLink href="/merch" onClick={handleLinkClick}>Consultas</NavLink>
          <NavLink href="/gallery" onClick={handleLinkClick}>Recursos</NavLink>
          <NavLink href="/contact" onClick={handleLinkClick}>Contactos</NavLink>
        </nav>
      )}
    </header>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        px-4 py-2 text-lg
        hover:text-orange-900 tracking-wider font-semibold
        ${isActive ? "text-orange-900" : "text-gray-500"}
      `}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
