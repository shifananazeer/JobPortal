import Button from "../ui/Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-secondary shadow-md">
      
      <h1 className="text-2xl font-bold text-white">
        JobPortal
      </h1>

       <Button text="Login" />

    </nav>
  );
};

export default Navbar;