import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const exams = [
  "BITSAT 2024",
  "BITSAT 2023",
  "BITSAT 2022",
];

const subjects = ["English", "Physics", "Chemistry", "Mathematics", "Logical"];

function Mock() {
  const [openExam, setOpenExam] = useState(null);

  const toggleExam = (exam) => {
    setOpenExam(openExam === exam ? null : exam);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 pt-20 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          BITSAT Session Exam Categories
        </h1>

        <div className="space-y-4">
          {exams.map((exam) => (
            <div key={exam} className="border rounded-lg bg-white shadow-sm">
              <button
                onClick={() => toggleExam(exam)}
                className="w-full flex justify-between items-center px-4 py-3 text-left"
              >
                <span className="text-blue-800 font-semibold">{exam}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openExam === exam ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {openExam === exam && (
                <div className="border-t px-4 py-2 space-y-2">
                  {subjects.map((subject) => (
                    <Link
                      key={subject}
                      to={`/questions/${exam}/${subject}`}
                      className="flex justify-between items-center bg-blue-50 text-blue-800 rounded px-4 py-2 hover:bg-blue-100 transition"
                    >
                      <span>{subject}</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mock;
