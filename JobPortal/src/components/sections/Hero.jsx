import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="text-center py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Find Your Dream Job Today
      </h1>

      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Explore thousands of job opportunities from top companies around the world.
      </p>

      <div className="flex justify-center gap-4">
        <Button text="Get Started" />
        <Button text="Browse Jobs" type="secondary" />
      </div>
      </div>
    </section>
  );
};

export default Hero;