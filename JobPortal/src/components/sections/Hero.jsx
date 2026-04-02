import { Mic } from "lucide-react";


const Hero = () => {
  return (
    <section className="bg-[#f5f5f5] py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        
        <div className="grid md:grid-cols-2 items-center">
          
          {/* LEFT CONTENT */}
          <div className="p-8">
            
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
              Zecpath AI hiring platform
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Find your{" "}
              <span className="text-yellow-500">Dream Job</span>
            </h2>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              ZECPATH is AI-powered hiring platform that makes recruitment faster,
              smarter and effortless. Find your dream job or hire the perfect
              candidate with smart screening, voice interviews, and automated
              scheduling in one place.
            </p>

            {/* Search Bar */}
            <div className="flex items-center border rounded-lg px-4 py-2 bg-gray-100">
              <input
                type="text"
                placeholder="Search job title"
                className="w-full bg-transparent outline-none text-sm"
              />
            <Mic className="text-gray-500 w-5 h-5" />
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-full">
            <img
              src="/hero.jpg"   // 👉 put your image in public folder
              alt="hero"
              className="w-full h-full object-cover"
            />

            {/* Overlay Text */}
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm">Search jobs from top</p>
              <p className="text-yellow-400 font-semibold">
                Companies
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;