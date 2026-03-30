const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-xl font-semibold text-white mb-2">
          JobPortal
        </h2>

        <p className="mb-4 text-gray-400">
          Find your dream job with us.
        </p>

        <div className="flex justify-center gap-6 mb-4 text-sm">
          <span className="hover:text-white cursor-pointer">About</span>
          <span className="hover:text-white cursor-pointer">Jobs</span>
          <span className="hover:text-white cursor-pointer">Contact</span>
        </div>

        <p className="text-xs text-gray-500">
          © 2026 JobPortal. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;