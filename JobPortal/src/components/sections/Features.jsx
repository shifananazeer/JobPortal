import { BarChart3, Mic, Calendar, BarChart } from "lucide-react";

const features = [
  {
    title: "AI smart Ranking",
    desc: "Automated ATS resume parsing candidate ranking to find top 1% instantly",
    icon: <BarChart3 className="w-5 h-5 text-orange-500" />,
    bg: "bg-orange-100",
  },
  {
    title: "AI Voice Interviews",
    desc: "Automated screening with multilingual & gender-based AI agents available 24/",
    icon: <Mic className="w-5 h-5 text-blue-500" />,
    bg: "bg-blue-100",
  },
  {
    title: "Smart Scheduling",
    desc: "Automated interview scheduling with intelligent email & call reminder",
    icon: <Calendar className="w-5 h-5 text-green-500" />,
    bg: "bg-green-100",
  },
  {
    title: "Admin Analytics",
    desc: "Real-time monitoring & hiring insights to track performance and opportunities",
    icon: <BarChart className="w-5 h-5 text-pink-500" />,
    bg: "bg-pink-100",
  },
];

const Features = () => {
  return (
    <section className="py-10 px-4 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-lg md:text-xl font-semibold mb-6">
          Powerful{" "}
          <span className="text-blue-600">Features</span>{" "}
          For Smarter Hiring
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-md ${item.bg}`}>
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;