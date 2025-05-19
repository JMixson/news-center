import Link from 'next/link';

function Navbar() {
  return (
    <div className="bg-white shadow-sm">
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
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
