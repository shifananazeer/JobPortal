const jobs = [
  {
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
  },
  {
    title: "Backend Developer",
    company: "Amazon",
    location: "Bangalore",
  },
  {
    title: "UI/UX Designer",
    company: "Meta",
    location: "Remote",
  },
];

const Jobs = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-xl font-semibold mb-8 text-blue-600">
          Latest Jobs
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="border rounded-lg p-5 shadow-sm hover:shadow-md transition"
            >
              
              <h3 className="text-lg font-semibold text-gray-800">
                {job.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {job.company}
              </p>

              <p className="text-xs text-gray-400 mb-4">
                {job.location}
              </p>

              <button className="text-blue-600 text-sm font-medium hover:underline">
                Apply Now →
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Jobs;