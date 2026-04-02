import { UserPlus, Bot, MessageCircle, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Create Profile",
    desc: "Sign up and add details",
    icon: <UserPlus className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "AI Screening",
    desc: "Our AI filters matches jobs",
    icon: <Bot className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Interview",
    desc: "Get screened via smart voice calls",
    icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Get Hired",
    desc: "Attend interview and get hired",
    icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-lg md:text-xl font-semibold text-blue-600 mb-8">
          How Zecpath Simplifies Hiring
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              
              {/* Circle */}
              <div className="w-28 h-28 mx-auto rounded-full bg-white shadow flex items-center justify-center relative">
                
                {/* Number Badge */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                  {index + 1}
                </div>

                {/* Icon */}
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 font-semibold text-gray-800 text-sm">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-500 mt-1">
                {step.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;