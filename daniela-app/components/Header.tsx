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
    <header className="z-[10000] sticky top-0 w-full flex justify-between items-center px-4 pt-2 bg-orange-50 ">
      {/* Logo */}
      <Link className="shrink-0" href="/">
        <Image
          className="object-contain"
          src="/logo-daniela.png"
          alt="Logo"
          width={220}
          height={100}
        />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-500 hover:text-orange-900"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <PiXBold size={32} /> : <PiListBold size={32} />}
      </button>

      {/* Nav Links - Desktop */}
      <nav className="hidden md:flex flex-row gap-4 flex-wrap justify-center">
        <NavLink href="/sobre">SOBRE</NavLink>
        <NavLink href="/consultas">CONSULTAS</NavLink>
        <NavLink href="/recursos">RECURSOS</NavLink>
        <NavLink href="/contactos">CONTACTOS</NavLink>
      </nav>

      {/* Nav Links - Mobile */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 flex flex-col items-center gap-2 py-4 bg-orange-50 text-lg border-b border-orange-200">
          <NavLink href="/sobre" onClick={handleLinkClick}>
            SOBRE
          </NavLink>
          <NavLink href="/consultas" onClick={handleLinkClick}>
            CONSULTAS
          </NavLink>
          <NavLink href="/recursos" onClick={handleLinkClick}>
            RECURSOS
          </NavLink>
          <NavLink href="/contactos" onClick={handleLinkClick}>
            CONTACTOS
          </NavLink>
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
