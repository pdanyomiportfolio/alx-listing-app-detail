import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // or Heroicons if you prefer

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          StayFinder
        </Link>

        {/* Search Bar (Desktop only) */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search by location..."
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex gap-6">
          <Link href="/rooms" className="hover:text-blue-600">
            Rooms
          </Link>
          <Link href="/mansions" className="hover:text-blue-600">
            Mansions
          </Link>
          <Link href="/countryside" className="hover:text-blue-600">
            Countryside
          </Link>
        </nav>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex gap-4">
          <button className="text-gray-600">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/rooms" className="hover:text-blue-600">
              Rooms
            </Link>
            <Link href="/mansions" className="hover:text-blue-600">
              Mansions
            </Link>
            <Link href="/countryside" className="hover:text-blue-600">
              Countryside
            </Link>
            <hr />
            <button className="text-gray-600 text-left">Sign In</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-left">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
