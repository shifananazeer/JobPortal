const features = [
  {
    title: "Easy Job Search",
    desc: "Find jobs quickly with smart filters.",
  },
  {
    title: "Top Companies",
    desc: "Work with industry-leading companies.",
  },
  {
    title: "Fast Application",
    desc: "Apply to jobs in just a few clicks.",
  },
];

const Features = () => {
  return (
   <section className="py-24 bg-secondary text-white">
  <div className="container mx-auto px-6">
    
    <h2 className="text-3xl font-bold text-center mb-12">
      Why Choose Us
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {features.map((item, index) => (
        <div
          key={index}
          className="p-6 rounded-2xl bg-slate-800 shadow-soft hover:scale-105 transition duration-300 text-center"
        >
          <h3 className="text-xl font-semibold mb-2 text-primary">
            {item.title}
          </h3>

          <p className="text-gray-300">
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