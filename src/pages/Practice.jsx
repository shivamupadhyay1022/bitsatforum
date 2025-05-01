import React from "react";
import Navbar from "../components/Navbar";

// Reusable Card Component (You can create a separate file for this if you want)
const Card = ({ className, children }) => (
  <div className={`rounded-lg shadow-md bg-white p-4 ${className}`}>
    {children}
  </div>
);

const Practice = () => {
  const SessionCard = ({
    sessionName,
    questions,
    time,
    practiceLink,
    downloadLink,
  }) => {
    return (
      <Card className="flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            {sessionName}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {questions} | {time}
          </p>
        </div>
        <div className="flex justify-between space-x-4">
          <a
            href={practiceLink}
            className="border-[0.5px] w-full border-gray-300 rounded  px-4 text-sm items-center justify-center flex"
          >
            Practice
          </a>
          <a
            href={downloadLink}
            className="border-[0.5px] w-full border-gray-300 rounded  px-4 text-sm items-center justify-center flex"
          >
            Download
          </a>
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
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </div>
      </Card>
    );
  };

  const YearSection = ({ year, sessions }) => {
    return (
      <div className="mb-8 mx-4 md:mx-16">
        <h2 className="text-md font-semibold text-gray-800 mb-4">{year}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sessions.map((session, index) => (
            <SessionCard
              key={index}
              sessionName={session.name}
              questions={session.questions}
              time={session.time}
              practiceLink={session.practiceLink}
              downloadLink={session.downloadLink}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar/>
    <div className="bg-gray-100 py-12 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          BITSAT Question Papers
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Access previous years&apos; BITSAT question papers with detailed
          solutions and expert analysis.
        </p>

        <YearSection
          year="Sample"
          sessions={[
            {
              name: "Sample Test Paper",
              questions: "16 Questions",
              time: "21 Min",
              practiceLink: "/instructions/6",
              downloadLink: "#",
            },
          ]}
        />
        <YearSection
          year="BITSAT 2024"
          sessions={[
            {
              name: "Sample Test Paper",
              questions: "130 + 12 Bonus Questions",
              time: "180 Min",
              practiceLink: "/instructions/7",
              downloadLink: "#",
            },
          ]}
        />
        <YearSection
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

        <YearSection
          year="BITSAT 2022"
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
          ]}
        />
      </div>
    </div>
    </div>
  );
};

export default Practice;
