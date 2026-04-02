const CTA = () => {
  return (
    <section className="py-16 px-4 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-[#1E78A8] text-white rounded-xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Text */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Ready to Launch Your Career?
            </h2>

            <p className="text-sm text-blue-100">
              Join 10,000+ professionals who found their dream jobs through zecpath
            </p>
          </div>

          {/* Button */}
          <button className="bg-gray-200 text-black px-5 py-2 rounded-lg text-sm font-medium hover:bg-white transition">
            Create your Profile
          </button>

        </div>

      </div>
    </section>
  );
};

export default CTA;