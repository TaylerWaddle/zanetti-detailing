"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ZanettiNavLogo from "../../../public/zanetti nav logo.svg";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Booking", href: "/booking" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <nav className="bg-grey1 shadow-sm">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto p-4">
        <Link href="/" className="text-white" onClick={() => setIsOpen(false)}>
          <Image src={ZanettiNavLogo} alt="zanetti logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`
                  ${
                    pathname === item.href
                      ? "text-purple text-2xl "
                      : "hover:text-purple text-white text-2xl"
                  }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-22 left-0 w-full h-full bg-grey1 z-50 border-t border-gray-700">
          <ul className="flex flex-col items-center space-y-4 p-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex px-4 py-2 text-lg text-white ${
                    pathname === item.href
                      ? "text-purple"
                      : "hover:text-gray-400"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
