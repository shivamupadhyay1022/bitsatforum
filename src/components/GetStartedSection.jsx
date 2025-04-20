export default function GetStartedSection() {
    const steps = [
      "Sign up for a free account",
      "Choose your target topics",
      "Practice with past year papers",
      "Track your progress",
    ];
  
    return (
      <section className="bg-white py-20 px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text Content */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Get Started in{" "}
              <span className="text-blue-700 font-bold">4 Simple Steps</span>
            </h2>
  
            <ul className="mt-8 space-y-4">
              {steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1">
                    {/* Check Circle SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-orange-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
  
            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium inline-flex items-center gap-2 transition">
              Start Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
  
          {/* Right Placeholder Image */}
          <div className="flex-1 w-full max-w-md h-80 bg-gray-100 rounded-lg flex items-center justify-center border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="9" strokeDasharray="4 2" />
              <path d="M12 8v4l2 2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>
    );
  }
  