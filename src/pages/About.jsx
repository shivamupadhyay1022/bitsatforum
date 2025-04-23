import React from "react";
import Footer from "../components/Footer";

const About = () => {
  const LearnMoreButton = () => (
    <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2.5 px-6 rounded-2xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
      Learn More
    </button>
  );

  const BITSLogo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className="w-64 h-64 text-gray-300"
    >
      <path
        fill="currentColor"
        d="M250 500A250 250 0 1 0 250 0a250 250 0 0 0 0 500zm0-80a170 170 0 1 1 0-340 170 170 0 0 1 0 340zm0-300a30 30 0 1 1 0 60 30 30 0 0 1 0-60zm120 180c0 33.137-26.863 60-60 60h-240c-33.137 0-60-26.863-60-60v-80c0-33.137 26.863-60 60-60h240c33.137 0 60 26.863 60 60v80z"
      />
    </svg>
  );

  const PeopleLogo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );

  const VisionIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-blue-500 mb-2"
    >
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      <path d="M16 17l-5-5-5 5" />
    </svg>
  );

  const MissionIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
      />
    </svg>
  );

  return (
    <div>
      <Navba/>
      <div className="bg-gray-100">
        <header className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-4xl font-bold text-gray-800 mb-4">
              About BITSAT Forum
            </h1>
            <p className="text-md text-gray-600 max-w-2xl mx-auto">
              Your trusted companion in BITSAT preparation, dedicated to helping
              students achieve their dreams of studying at BITS Pilani.
            </p>
          </div>
        </header>

        <main className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              {/* Text Content */}
              <div className="px-16">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  BITS Pilani & BITSAT
                </h2>
                <p className="text-md text-gray-700 mb-6">
                  Birla Institute of Technology and Science (BITS) Pilani is one
                  of India&apos;s leading institutions of higher education and a
                  deemed university. Founded in 1964, BITS Pilani has
                  consistently ranked among the top engineering colleges in
                  India.
                </p>
                <p className="text-md text-gray-700 mb-8">
                  BITSAT (BITS Admission Test) is the institute&apos;s online
                  entrance examination for admission to various engineering
                  programs across its campuses in Pilani, Goa, Hyderabad, and
                  Dubai.
                </p>
                <LearnMoreButton />
              </div>

              {/* Image/Logo */}
              <div className="flex justify-center">
                <BITSLogo />
              </div>
            </div>

            {/* Our Founder's Story */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-16">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 500"
                  className="w-64 h-64 text-gray-300"
                >
                  <path
                    fill="currentColor"
                    d="M250 500A250 250 0 1 0 250 0a250 250 0 0 0 0 500zm0-80a170 170 0 1 1 0-340 170 170 0 0 1 0 340zm0-300a30 30 0 1 1 0 60 30 30 0 0 1 0-60zm120 180c0 33.137-26.863 60-60 60h-240c-33.137 0-60-26.863-60-60v-80c0-33.137 26.863-60 60-60h240c33.137 0 60 26.863 60 60v80z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  Our Founder&apos;s Story
                </h2>
                <p className="text-md text-gray-700 mb-4">
                  As a BITS Pilani alumnus, our founder recognized the
                  challenges students face while preparing for BITSAT. This
                  platform was born from a vision to make quality BITSAT
                  preparation accessible to all aspiring students.
                </p>
                <p className="text-md text-gray-700">
                  With years of experience in education technology and a deep
                  understanding of the BITSAT pattern, we&apos;ve created a
                  comprehensive preparation platform that addresses the unique
                  needs of BITSAT aspirants.
                </p>
              </div>
            </div>

            {/* Our Mission & Vision */}
            <div className="text-center my-16 px-16 ">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
                Our Mission & Vision
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                <div className="bg-white p-2 pt-4 rounded-xl">
                  <div className="flex justify-start items-center">
                    <MissionIcon />
                    <h3 className="text-xl font-semibold text-center text-gray-800 ">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-sm text-start p-2 text-gray-700">
                    To empower BITSAT aspirants with high-quality practice
                    materials, personalized learning experiences, and
                    comprehensive test preparation strategies.
                  </p>
                </div>
                <div className="bg-white p-2 pt-4 rounded-xl">
                  <div className="flex justify-start items-center">
                    <MissionIcon />
                    <h3 className="text-xl font-semibold text-center text-gray-800 ">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-sm text-start p-2 text-gray-700">
                    To become the most trusted BITSAT preparation platform,
                    helping thousands of students achieve their dreams of
                    studying at BITS Pilani.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Packages */}
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-12">
                Our Packages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Basic Package
                  </h3>
                  <ul className="text-gray-700 pl-6 text-sm">
                    <li className="mb-2 flex">
                      <PeopleLogo />
                      Previous Year Papers
                    </li>
                    <li className="mb-2 flex">
                      <PeopleLogo />
                      Basic Performance Analytics
                    </li>
                    <li className="mb-2 flex">
                      <PeopleLogo />
                      Topic-wise Practice
                    </li>
                    <li className="mb-2 flex">
                      <PeopleLogo />
                      Limited Mock Tests
                    </li>
                  </ul>
                  <div className="mt-6">
                    <LearnMoreButton />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Premium Package
                  </h3>
                  <ul className="text-gray-700 pl-6 text-sm">
                    <li className="mb-2 flex">
                      <PeopleLogo />
                      All Basic Features
                    </li>
                    <li className="mb-2 flex">
                      <PeopleLogo />
                      Unlimited Mock Tests
                    </li>
                    <li className="mb-2 flex">
                      <PeopleLogo />
                      Detailed Solutions
                    </li>
                    <li className="mb-2 flex">
                      <PeopleLogo />
                      Performance Tracking
                    </li>
                  </ul>
                  <div className="mt-6">
                    <LearnMoreButton />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Elite Package
                  </h3>
                  <ul className="text-gray-700 pl-6 text-sm">
                    <li className="mb-2 flex">
                      <PeopleLogo />
                      All Premium Features
                    </li>
                    <li className="mb-2 flex">
                      <PeopleLogo />
                      Personalized Study Plan
                    </li>
                    <li className="mb-2 flex">
                      <PeopleLogo />
                      Expert Guidance
                    </li>
                    <li className="mb-2 flex">
                      <PeopleLogo />
                      Live Doubt Solving
                    </li>
                  </ul>
                  <div className="mt-6">
                    <LearnMoreButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default About;
