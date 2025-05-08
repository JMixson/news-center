'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="font-bold text-2xl text-gray-900">
            News Center
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Politics
            </Link>
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Business
            </Link>
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Technology
            </Link>
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Science
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-900 font-medium">
                Home
              </Link>
              <Link href="/" className="text-gray-600">
                Politics
              </Link>
              <Link href="/" className="text-gray-600">
                Business
              </Link>
              <Link href="/" className="text-gray-600">
                Technology
              </Link>
              <Link href="/" className="text-gray-600">
                Science
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
