import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Mock() {
  return (
    <div>
      <Navbar/>
    <div className="container mx-auto px-4 pt-20 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">BITSAT Mock Tests</h1>

      <p className="text-center text-gray-600 mb-12">
        Practice with our carefully designed mock tests that simulate the actual BITSAT examination environment.
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        {/* Feature 1 */}
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Real-Time Environment</h3>
          <p className="text-sm text-gray-600">Experience the actual BITSAT exam interface and timing.</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Peer Comparison</h3>
          <p className="text-sm text-gray-600">Compare your performance with other test takers.</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Detailed Analysis</h3>
          <p className="text-sm text-gray-600">Get comprehensive performance reports and insights.</p>
        </div>

        {/* Feature 4 */}
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Expert-Crafted</h3>
          <p className="text-sm text-gray-600">Questions designed by BITS Pilani alumni and experts.</p>
        </div>
      </div>

      {/* Full Length Mock Tests Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Full Length Mock Tests</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Mock Test 1 */}
        <div>
          <div className="mb-2">
            <h3 className="font-bold text-gray-800">Mock Test 1</h3>
            <p className="text-xs text-gray-500">Duration: 3 hours</p>
            <p className="text-xs text-gray-500">Questions: 130</p>
            <p className="text-xs text-gray-500">Difficulty: Medium</p>
          </div>
          <Link to="/mock/1">
            <button className="w-full bg-blue-800 text-white py-2 rounded text-sm">
              Start Test
            </button>
          </Link>
        </div>

        {/* Mock Test 2 */}
        <div>
          <div className="mb-2">
            <h3 className="font-bold text-gray-800">Mock Test 2</h3>
            <p className="text-xs text-gray-500">Duration: 3 hours</p>
            <p className="text-xs text-gray-500">Questions: 130</p>
            <p className="text-xs text-gray-500">Difficulty: Hard</p>
          </div>
          <Link to="/mock/2">
            <button className="w-full bg-blue-800 text-white py-2 rounded text-sm">
              Start Test
            </button>
          </Link>
        </div>

        {/* Mock Test 3 */}
        <div>
          <div className="mb-2">
            <h3 className="font-bold text-gray-800">Mock Test 3</h3>
            <p className="text-xs text-gray-500">Duration: 3 hours</p>
            <p className="text-xs text-gray-500">Questions: 130</p>
            <p className="text-xs text-gray-500">Difficulty: Medium</p>
          </div>
          <Link to="/mock/3">
            <button className="w-full bg-blue-800 text-white py-2 rounded text-sm">
              Start Test
            </button>
          </Link>
        </div>
      </div>

      {/* Subject-Wise Tests Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Subject-Wise Tests</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Physics Test */}
        <div>
          <div className="mb-2">
            <h3 className="font-bold text-gray-800">Physics Test 1</h3>
            <p className="text-xs text-gray-500">Duration: 1 hour</p>
            <p className="text-xs text-gray-500">Questions: 30</p>
            <p className="text-xs text-gray-500">Difficulty: Medium</p>
          </div>
          <Link to="/subject/physics/1">
            <button className="w-full bg-blue-800 text-white py-2 rounded text-sm">
              Start Test
            </button>
          </Link>
        </div>

        {/* Chemistry Test */}
        <div>
          <div className="mb-2">
            <h3 className="font-bold text-gray-800">Chemistry Test 1</h3>
            <p className="text-xs text-gray-500">Duration: 1 hour</p>
            <p className="text-xs text-gray-500">Questions: 30</p>
            <p className="text-xs text-gray-500">Difficulty: Easy</p>
          </div>
          <Link to="/subject/chemistry/1">
            <button className="w-full bg-blue-800 text-white py-2 rounded text-sm">
              Start Test
            </button>
          </Link>
        </div>

        {/* Mathematics Test */}
        <div>
          <div className="mb-2">
            <h3 className="font-bold text-gray-800">Mathematics Test 1</h3>
            <p className="text-xs text-gray-500">Duration: 1 hour</p>
            <p className="text-xs text-gray-500">Questions: 30</p>
            <p className="text-xs text-gray-500">Difficulty: Hard</p>
          </div>
          <Link to="/subject/mathematics/1">
            <button className="w-full bg-blue-800 text-white py-2 rounded text-sm">
              Start Test
            </button>
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Mock;
