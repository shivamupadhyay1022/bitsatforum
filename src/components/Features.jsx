export default function FeaturesSection() {
    const features = [
      {
        title: "Past Year Papers with Solutions",
        description:
          "Access a comprehensive collection of previous year BITSAT papers with detailed solutions.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 20h9M12 4h9M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        ),
      },
      {
        title: "Adaptive Mock Tests",
        description:
          "Take personalized mock tests that adapt to your performance level.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" strokeWidth="2" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
          </svg>
        ),
      },
      {
        title: "Performance Analytics",
        description:
          "Track your progress with detailed analytics and performance insights.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16h2v2H4v-2zm4-6h2v8H8V10zm4-4h2v12h-2V6zm4 8h2v4h-2v-4z"
            />
          </svg>
        ),
      },
      {
        title: "Time-Based Practice",
        description:
          "Practice with realistic time constraints to improve your speed and accuracy.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
          </svg>
        ),
      },
      {
        title: "Expert Tips & Strategies",
        description:
          "Learn proven strategies and tips from BITSAT toppers and experts.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 20l4-16m-4 16l-4-16m4 16h4m-4 0H8"
            />
          </svg>
        ),
      },
    ];
  
    return (
      <section className="bg-gray-50 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
        <p className="mt-2 text-gray-600">
          Everything you need to ace your BITSAT preparation
        </p>
  
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border p-6 text-left hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-md">{feature.icon}</div>
                <h3 className="text-md font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-3 text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  