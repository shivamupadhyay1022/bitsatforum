import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "../../supabase";
import { parseTextWithImages } from "../components/parseTextWithImages";

function QuestionPage() {
  const { exam, subject } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [searchId, setSearchId] = useState("");

  const QUESTIONS_PER_PAGE = 15;

  const titleCase = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const formattedTag = exam.toUpperCase().replace(/([a-z])(\d)/gi, "$1 $2");
        let query = supabase
          .from("questions")
          .select("*")
          .ilike("tags", `%${formattedTag}%`)
          .ilike("subject", subject);

        if (searchId) {
          query = query.eq("id", searchId);
        } else if (searchText) {
          query = query.ilike("question", `%${searchText}%`);
        } else {
          query = query.range(page * QUESTIONS_PER_PAGE, (page + 1) * QUESTIONS_PER_PAGE - 1);
        }

        const { data, error } = await query;

        if (error) {
          console.error("Supabase fetch error:", error);
          setQuestions([]);
        } else {
          const withUIState = data.map((q) => {
            const options = [q.option1, q.option2, q.option3, q.option4];
            const correctAnswerIndex = {
              option1: 0,
              option2: 1,
              option3: 2,
              option4: 3,
            }[q.correct?.toLowerCase()] ?? -1;

            return {
              ...q,
              options,
              correctAnswer: correctAnswerIndex,
              showOptions: false,
              selectedOption: null,
              showResult: false,
            };
          });

          setQuestions(withUIState);
          setIsLastPage(!searchText && !searchId && data.length < QUESTIONS_PER_PAGE);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        setQuestions([]);
      }
      setLoading(false);
    };

    fetchQuestions();
  }, [exam, subject, page, searchText, searchId]);

  const handleToggleOptions = (index) => {
    setQuestions((prev) =>
      prev.map((q, i) => (i === index ? { ...q, showOptions: !q.showOptions } : q))
    );
  };

  const handleSelectOption = (qIndex, optIndex) => {
    setQuestions((prev) =>
      prev.map((q, i) => (i === qIndex ? { ...q, selectedOption: optIndex } : q))
    );
  };

  const handleCheckAnswer = (index) => {
    setQuestions((prev) =>
      prev.map((q, i) => (i === index ? { ...q, showResult: true } : q))
    );
  };

  const handleSearch = () => {
    setPage(0);
  };

  const clearSearch = () => {
    setSearchId("");
    setSearchText("");
    setPage(0);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
          {titleCase(subject)} Questions - {exam.toUpperCase()}
        </h1>

        {/* 🔍 Search Section */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
          <input
            type="text"
            placeholder="Search by Question Text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setSearchId("");
            }}
            className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Search by ID"
            value={searchId}
            onChange={(e) => {
              setSearchId(e.target.value);
              setSearchText("");
            }}
            className="w-full sm:w-40 px-4 py-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Search
          </button>
          <button
            onClick={clearSearch}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Clear
          </button>
        </div>

        {/* 🔄 Content */}
        {loading ? (
          <div className="text-center py-10 text-gray-500">Loading...</div>
        ) : questions.length === 0 ? (
          <div className="text-center py-10 text-red-500">
            No questions found.
          </div>
        ) : (
          <div className="space-y-6">
            {questions.map((q, index) => (
              <div
                key={q.id}
                className="bg-white p-4 rounded-lg shadow border border-gray-100"
              >
                <div className="mb-2 font-medium text-gray-800">
                  Q.ID: {q.id}. {parseTextWithImages(q.question)}
                </div>

                {!q.showOptions ? (
                  <button
                    className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => handleToggleOptions(index)}
                  >
                    Show Options
                  </button>
                ) : (
                  <>
                    <ul className="space-y-2 mt-4">
                      {q.options?.map((opt, i) => {
                        const isSelected = q.selectedOption === i;
                        const isCorrect = q.correctAnswer === i;
                        const isWrong = q.showResult && isSelected && !isCorrect;

                        let optionClass =
                          "px-3 py-2 rounded cursor-pointer border ";
                        if (q.showResult) {
                          if (isSelected && isCorrect) {
                            optionClass +=
                              "bg-green-100 border-green-500 text-green-700";
                          } else if (isWrong) {
                            optionClass +=
                              "bg-red-100 border-red-500 text-red-700";
                          } else if (!isSelected && isCorrect) {
                            optionClass +=
                              "bg-green-50 border-green-400 text-green-700";
                          } else {
                            optionClass +=
                              "bg-gray-100 border-gray-300 text-gray-600";
                          }
                        } else {
                          optionClass += isSelected
                            ? "bg-blue-100 border-blue-500"
                            : "bg-gray-100 border-gray-300";
                        }

                        return (
                          <li
                            key={i}
                            className={optionClass}
                            onClick={() => handleSelectOption(index, i)}
                          >
                            <span className="font-semibold mr-2">
                              {String.fromCharCode(65 + i)}.
                            </span>{" "}
                            {parseTextWithImages(opt)}
                          </li>
                        );
                      })}
                    </ul>

                    {!q.showResult && (
                      <button
                        className="mt-4 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                        onClick={() => handleCheckAnswer(index)}
                        disabled={q.selectedOption === null}
                      >
                        Check Answer
                      </button>
                    )}

                    {q.showResult && (
                      <div className="mt-3 text-sm">
                        {q.selectedOption === q.correctAnswer ? (
                          <span className="text-green-600 font-semibold">
                            ✅ Correct Answer!
                          </span>
                        ) : (
                          <span className="text-red-600 font-semibold">
                            ❌ Incorrect. Correct answer is {q.correct}.
                          </span>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {!loading && questions.length > 0 && !searchText && !searchId && (
          <div className="flex justify-between items-center mt-10">
            <button
              onClick={() => setPage((prev) => prev - 1)}
              disabled={page === 0}
              className={`px-4 py-2 rounded ${
                page === 0
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              ⬅ Prev
            </button>
            <span className="text-gray-600 font-medium">Page {page + 1}</span>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={isLastPage}
              className={`px-4 py-2 rounded ${
                isLastPage
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Next ➡
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default QuestionPage;
