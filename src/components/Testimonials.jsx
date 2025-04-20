import React from 'react';

const Testimonials = () => {
  // Star SVG component
  const StarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className="w-4 h-4 text-yellow-400"
    >
      <path
        d="M10.821 3.152a.5.5 0 0 0-.642 0l-2.35 1.781-.53-.442A.5.5 0 0 0 6.847 4H4.5a.5.5 0 0 0-.479.684l1.621 1.912L2.35 8.35a.5.5 0 0 0-.152.541l.734 2.133-.53.441a.5.5 0 0 0-.139.564l2.35 1.781 1.488 1.125a.5.5 0 0 0 .899 0l1.488-1.125 2.35-1.781a.5.5 0 0 0-.139-.564l-.53-.441.734-2.133a.5.5 0 0 0-.152-.54l-1.621-1.912a.5.5 0 0 0-.479-.684h-2.347a.5.5 0 0 0-.368.156l-.53.442-2.35-1.781z"
        fillRule="evenodd"
      />
    </svg>
  );

  const TestimonialCard = ({ children, name, college, index }) => {
    const bgColors = [
      'bg-white',       // Default
      'bg-blue-50',    // Light Blue
      'bg-purple-50',  // Light Purple
      'bg-green-50',   // Light Green
    ];

    const textColor = 'text-gray-700'; // Consistent text color

    // Cycle through background colors
    const bgColor = bgColors[index % bgColors.length];

    return (
      <div
        className={`${bgColor} rounded-lg shadow-md p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
      >
        <div>
          <div className="flex justify-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <p className={`${textColor} text-sm italic leading-relaxed mb-4`}>
            {children}
          </p>
        </div>
        <div className="text-center">
          <p className={`${textColor} font-semibold text-base`}>{name}</p>
          <p className={`${textColor} text-sm`}>{college}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
            What Our Students Say
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            Success stories from students who achieved their dreams
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard name="Priya Sharma" college="BITS Pilani, CSE" index={0}>
            The practice questions and mock tests on this platform were instrumental
            in my BITSAT preparation. I got exactly what I needed to succeed.
          </TestimonialCard>
          <TestimonialCard name="Rahul Verma" college="BITS Goa, ECE" index={1}>
            The performance analytics helped me identify my weak areas and focus my
            preparation effectively. Highly recommended!
          </TestimonialCard>
          <TestimonialCard name="Anjali Patel" college="BITS Hyderabad, Mechanical" index={2}>
            Amazing platform! The expert tips and strategies section gave me
            insights that I couldn't find anywhere else.
          </TestimonialCard>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
