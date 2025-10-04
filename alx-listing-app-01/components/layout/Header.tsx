const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">StayFinder</h1>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search by location..."
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:text-blue-600">Rooms</a>
          <a href="#" className="hover:text-blue-600">Mansions</a>
          <a href="#" className="hover:text-blue-600">Countryside</a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          <button className="text-gray-600">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
