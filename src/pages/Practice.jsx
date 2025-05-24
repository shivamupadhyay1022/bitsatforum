import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { supabase } from "../../supabase";

// Reusable Card Component
const Card = ({ className = "", children }) => (
  <div className={`rounded-lg shadow-md bg-white p-4 ${className}`}>
    {children}
  </div>
);

// Card for Each Session
const SessionCard = ({ session }) => (
  <Card className="flex flex-col justify-between">
    <div>
      <h3 className="text-sm font-semibold text-gray-800 mb-2">
        {session.name}
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        {session.questions} | {session.time}
      </p>
    </div>
    <div className="flex justify-between space-x-4">
      <a
        href={session.practiceLink}
        className="border border-gray-300 w-full rounded px-4 py-1 text-sm text-center"
      >
        Start
      </a>
      {/* <a
        href={session.downloadLink}
        className="border border-gray-300 w-full rounded px-4 py-1 text-sm text-center"
      >
        Download
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg> */}
    </div>
  </Card>
);

// Section per Year
const YearSection = ({ year, sessions }) => (
  <div className="mb-12 px-4 md:px-8">
    <h2 className="text-md font-semibold text-gray-800 mb-4">{year}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {sessions.map((session, index) => (
        <SessionCard key={index} session={session} />
      ))}
    </div>
  </div>
);

const Practice = () => {
  const [bitsat2024Sessions, setBitsat2024Sessions] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      const { data, error } = await supabase
        .from("exams")
        .select("id,Name,Duration")
        .ilike("Tags", "%BITSAT_2024%");

      if (error) return;

      const formatted = data.map((exam, idx) => ({
        name: exam.Name || `Sample Test Paper ${idx + 1}`,
        questions: "150 Questions",
        time: `${exam.Duration || 180} mins`,
        practiceLink: `/instructions/${exam.id}`,
        downloadLink: "#",
      }));

      setBitsat2024Sessions(formatted);
    };

    fetchExams();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 py-12 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            BITSAT Question Papers
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Access previous years&apos; BITSAT question papers with detailed
            solutions and expert analysis.
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
          <YearSection year="BITSAT 2024" sessions={bitsat2024Sessions} />

          {/* <YearSection
            year="BITSAT 2023"
            sessions={[
              {
                name: "Session 1",
                questions: "150 Questions",
                time: "3 hours",
                practiceLink: "#",
                downloadLink: "#",
              },
              {
                name: "Session 2",
                questions: "150 Questions",
                time: "3 hours",
                practiceLink: "#",
                downloadLink: "#",
              },
              {
                name: "Session 3",
                questions: "150 Questions",
                time: "3 hours",
                practiceLink: "#",
                downloadLink: "#",
              },
            ]}
          />
 */}
        </div>
      </div>
    </div>
  );
};

export default Practice;
