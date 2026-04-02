const Footer = () => {
  return (
    <footer className="bg-[#0D1855] text-gray-300 py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        
        {/* Left */}
        <p>© 2026 JobPortal</p>

        {/* Middle Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <span className="hover:text-white cursor-pointer">About</span>
          <span className="hover:text-white cursor-pointer">Accessibility</span>
          <span className="hover:text-white cursor-pointer">User Agreement</span>
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Cookie Policy</span>
        </div>

        {/* Right */}
        <div className="flex gap-3">
          <span className="hover:text-white cursor-pointer">English</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;