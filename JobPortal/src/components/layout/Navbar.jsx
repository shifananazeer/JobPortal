import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0D1855] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-wide">
          ZECPATH.
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className="hover:text-blue-300">Find Jobs</a>
          <a href="#" className="hover:text-blue-300">Companies</a>
          <a href="#" className="hover:text-blue-300">Salaries</a>
          <a href="#" className="hover:text-blue-300">Resources</a>
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-3">
          
          <button className="bg-blue-600 px-4 py-1.5 rounded-md text-sm hover:bg-blue-700">
            Login
          </button>

          <button className="bg-gray-200 text-black px-4 py-1.5 rounded-md text-sm hover:bg-gray-300">
            Signup
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm">
          <a href="#">Find Jobs</a>
          <a href="#">Companies</a>
          <a href="#">Salaries</a>
          <a href="#">Resources</a>

          <button className="bg-blue-600 px-4 py-2 rounded-md">
            Login
          </button>

          <button className="bg-gray-200 text-black px-4 py-2 rounded-md">
            Signup
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;