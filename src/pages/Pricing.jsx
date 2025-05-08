import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Pricing() {
  return (
    <div>
      <Navbar/>
    <div className="container mx-auto px-8 pt-20  py-12 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Simple, Transparent Pricing</h1>
        <p className="text-gray-600">Choose the perfect plan for your BITSAT preparation journey</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
        {/* Basic Plan */}
        <div className="w-full md:w-1/3 flex flex-col">
          <div className="mb-2">
            <h2 className="text-xl font-bold text-gray-900">Basic</h2>
            <p className="text-sm text-gray-600">Perfect for getting started</p>
          </div>

          <div className="mb-4">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-900">₹999</span>
              <span className="text-sm text-gray-500 ml-1">/month</span>
            </div>
          </div>

          <div className="flex-grow space-y-2 mb-4">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">Access to previous year papers</span>
            </div>

            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">Basic performance analytics</span>
            </div>

            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">5 mock tests per month</span>
            </div>

            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">Email support</span>
            </div>
          </div>

          <Link to="/signup" className="block">
            <button className="w-full bg-gray-900 text-white py-2 rounded text-sm font-medium">
              Get Started
            </button>
          </Link>
        </div>

        {/* Premium Plan - Most Popular */}
        <div className="w-full md:w-1/3 border border-gray-200 rounded-lg p-6 flex flex-col relative">
          <div className="absolute -top-3 left-0 right-0 mx-auto w-24 bg-blue-800 text-white text-xs font-semibold py-1 text-center rounded">
            Most Popular
          </div>

          <div className="mb-2">
            <h2 className="text-xl font-bold text-gray-900">Premium</h2>
            <p className="text-sm text-gray-600">Most popular choice</p>
          </div>

          <div className="mb-4">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-900">₹1999</span>
              <span className="text-sm text-gray-500 ml-1">/month</span>
            </div>
          </div>

          <div className="flex-grow space-y-2 mb-4">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">All Basic features</span>
            </div>

            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">Unlimited mock tests</span>
            </div>

            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">Detailed solutions</span>
            </div>

            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">Priority email support</span>
            </div>

            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">Performance tracking</span>
            </div>

            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">Custom study planner</span>
            </div>
          </div>

          <Link to="/signup" className="block">
            <button className="w-full bg-blue-800 text-white py-2 rounded text-sm font-medium">
              Get Started
            </button>
          </Link>
        </div>

        {/* Elite Plan */}
        <div className="w-full md:w-1/3 flex flex-col">
          <div className="mb-2">
            <h2 className="text-xl font-bold text-gray-900">Elite</h2>
            <p className="text-sm text-gray-600">For serious aspirants</p>
          </div>

          <div className="mb-4">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-900">₹2999</span>
              <span className="text-sm text-gray-500 ml-1">/month</span>
            </div>
          </div>

          <div className="flex-grow space-y-2 mb-4">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">All Premium features</span>
            </div>

            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">1-on-1 mentorship</span>
            </div>

            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">Live doubt solving</span>
            </div>

            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">Interview preparation</span>
            </div>

            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">Guaranteed response time</span>
            </div>

            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">Personalized feedback</span>
            </div>
          </div>

          <Link to="/signup" className="block">
            <button className="w-full bg-gray-900 text-white py-2 rounded text-sm font-medium">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Pricing;
