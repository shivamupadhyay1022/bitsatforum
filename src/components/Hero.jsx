import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate()
  return (
    <section className="flex flex-col items-center justify-center min-h-screen pt-20 text-center bg-gray-200 px-4">
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Master BITSAT with{" "}
          <span className="text-blue-800">Past Year Papers</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Practice with previous year questions, take mock tests, and track your
          progress with our comprehensive preparation platform.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={()=>navigate("/practice")} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded transition">
            Start Practicing Now
          </button>
          <button onClick={()=>navigate("/about")} className="border border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold py-3 px-6 rounded transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Background concentric circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-16">
        <div className="w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full border border-gray-300 opacity-20 relative">
          <div className="absolute inset-1/4 w-1/2 h-1/2 rounded-full border border-gray-300" />
          <div className="absolute inset-1/2 w-[2px] h-full bg-gray-300" />
          <div className="absolute inset-1/2 w-full h-[2px] bg-gray-300" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
