import Button from "../ui/Button";

const CTA = () => {
  return (
    <section className="bg-gray-50 text-center py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Ready to Start Your Career?
        </h2>

        <p className="mb-6 text-gray-600 max-w-xl mx-auto">
          Join thousands of job seekers today.
        </p>

        <div className="flex justify-center">
          <Button text="Sign Up Now" />
        </div>

      </div>
    </section>
  );
};

export default CTA;