import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import Backnav from "../components/Backnav";
import { supabase } from "../../supabase";
import Questionblockcomp from "../components/Questionblockcomp";
import SolveexamWithMathlive from "../components/SolveexamWithMathlive";
import { useParams } from "react-router-dom";
import { parseTextWithImages } from "../components/parseTextWithImages";
import { toast } from "react-toastify";

function SolvePaper() {
  const [option, setOption] = useState("op0");
  const { id } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentquestion, setCurrentQuestion] = useState();
  const [attemptedQuestions, setAttemptedQuestions] = useState([]);
  const [examquestionlistid, SetexamquestionlistidId] = useState([]);
  const [examquestionlist, Setexamquestionlist] = useState([]);
  const [correctoptionlist, setCorrectOptionList] = useState([]);
  const [useroptionlist, setUserOptionList] = useState([]);
  const [score, setScore] = useState();
  const [exam, setExam] = useState();
  const [examName, setExamName] = useState();
  const [showsubmit, setShowSubmit] = useState(false);
  const [counter, setCounter] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  useLayoutEffect(() => {
    if (examquestionlistid.length > 0) {
      fetchQuestion(examquestionlistid[currentQuestionIndex]);
    }
  }, [examquestionlistid, currentQuestionIndex]);

  useEffect(() => {
    const fetchExam = async () => {
      if (!id) return;
      const { data, error } = await supabase
        .from("exams")
        .select("*")
        .eq("id", id)
        .single();
      if (!error && data) {
        setExam(data);
        setExamName(data.Name);
        setCounter(data.Duration * 60);
        const ids = data.Questions.split(",").map((id) => id.trim());
        SetexamquestionlistidId(ids);
      }
    };
    fetchExam();
  }, []);

  useLayoutEffect(() => {
    // Changed from useEffect
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    // Store the current scroll position right after React has updated the DOM
    const prevScrollTop = sidebar.scrollTop;

    // Use requestAnimationFrame to ensure the restoration happens
    // after the browser has potentially completed its layout calculations,
    // but still aiming to do it before the next paint.
    // useLayoutEffect helps ensure we capture the *latest* scroll state
    // right after React's updates.
    requestAnimationFrame(() => {
      sidebar.scrollTop = prevScrollTop;
    });
  }, [useroptionlist, currentQuestionIndex, counter]);

  // useEffect(() => {
  //   if (counter <= 0 && !showsubmit) {
  //     onSubmit();
  //     return;
  //   }
  //   const timer = setInterval(() => {
  //     setCounter((prev) => prev - 1);
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, [counter, showsubmit]);

  const fetchQuestion = async (id) => {
    const { data, error } = await supabase
      .from("questions")
      .select("*")
      .eq("id", id)
      .single();
    if (!error && data) setCurrentQuestion(data);
  };

  const calculateScore = () => {
    return correctoptionlist.reduce((acc, curr, index) => {
      return useroptionlist[index] === curr ? acc + 1 : acc;
    }, 0);
  };

  const onSubmit = async () => {
    const results = [];
    for (const id of examquestionlistid) {
      const { data } = await supabase
        .from("questions")
        .select("*")
        .eq("id", id)
        .single();
      if (data) results.push(data);
    }
    Setexamquestionlist(results);
    const newCorrectOptions = results.map((q) =>
      q.correct.replace("option", "op")
    );
    setCorrectOptionList(newCorrectOptions);
    const calculatedScore = newCorrectOptions.reduce((acc, curr, index) => {
      return useroptionlist[index] === curr ? acc + 1 : acc;
    }, 0);
    setScore(calculatedScore);
    setShowSubmit(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleOptionSelect = (selectedOption) => {
    const newUserOptions = [...useroptionlist];
    newUserOptions[currentQuestionIndex] = selectedOption;
    setUserOptionList(newUserOptions);
    const newCorrectOptions = [...correctoptionlist];
    newCorrectOptions[currentQuestionIndex] = currentquestion.correct.replace(
      "option",
      "op"
    );
    setCorrectOptionList(newCorrectOptions);
  };

  const ResultScreen = () => {
    const percentage = ((score / examquestionlistid.length) * 100).toFixed(2);
    const renderOption = (optionKey, optionText, userAnswer, correctAnswer) => {
      let border = "border-gray-300";
      let icon = null;
      if (userAnswer === optionKey && userAnswer === correctAnswer) {
        border = "border-green-500";
        icon = "✅";
      } else if (userAnswer === optionKey && userAnswer !== correctAnswer) {
        border = "border-red-500";
        icon = "❌";
      } else if (!userAnswer && optionKey === correctAnswer) {
        border = "border-green-500";
      }
      return (
        <div
          key={optionKey}
          className={`flex items-center p-2 mb-1 border-2 rounded-lg ${border}`}
        >
          <span className="mr-2 font-semibold">
            {optionKey.replace("op", "").toUpperCase()}.
          </span>
          <span className="flex-1">{parseTextWithImages(optionText)}</span>
          {icon && <span className="ml-2">{icon}</span>}
        </div>
      );
    };

    return (
      <div className="flex flex-col p-4">
        <div className="flex flex-col items-center justify-center p-4">
          <div className="p-8 rounded-xl shadow-xl text-center text-gray-800 w-full sm:w-[400px]">
            <h1 className="text-3xl font-bold text-blue-600">Quiz Results</h1>
            <p className="text-lg font-medium text-gray-700">Your Score</p>
            <div className="mt-4 flex justify-center items-center">
              <div className="w-24 h-24 border-4 border-blue-500 rounded-full flex items-center justify-center bg-gradient-to-b from-green-400 to-blue-500 text-white">
                <span className="text-3xl font-extrabold">{score}</span>
              </div>
              <span className="text-xl font-bold text-gray-500 mx-4">/</span>
              <span className="text-3xl font-extrabold text-gray-700">
                {examquestionlistid.length}
              </span>
            </div>
            <p className="mt-4 text-lg text-gray-500">{percentage}% Correct</p>
            <button
              className="mt-6 px-6 py-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md"
              onClick={() => window.location.reload()}
            >
              Retake Quiz
            </button>
          </div>
        </div>
        {examquestionlist.map((q, index) => (
          <div
            key={index}
            className="mb-6 p-4 border rounded-lg shadow-sm bg-white"
          >
            <h2 className="font-semibold mb-2">
              Q{index + 1}. {parseTextWithImages(q.question)}
            </h2>
            {["op1", "op2", "op3", "op4"].map((key, i) => {
              const optionText = q[`option${i + 1}`];
              return renderOption(
                key,
                optionText,
                useroptionlist[index],
                correctoptionlist[index]
              );
            })}
          </div>
        ))}
        <button
          className="mt-6 px-6 py-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md"
          onClick={() => window.location.reload()}
        >
          Retake Quiz
        </button>
      </div>
    );
  };

  const Sidebar = () => {
    const allBeforeLast5Attempted = examquestionlistid
      .slice(0, -5)
      .every((_, index) => useroptionlist[index] !== undefined);

    return (
      <div
        ref={sidebarRef}
        className={`fixed h-[70vh] overflow-y-auto top-12 left-0 z-40 transform transition-transform duration-300 ease-in-out border-r border-gray-200 bg-white ${
          showSidebar ? "translate-x-0 w-20 sm:w-24" : "-translate-x-full w-0"
        }`}
        style={{
          height: "calc(100vh - 3rem)",
          overflowY: "auto",
          willChange: "transform",
        }}
      >
        <div className="flex flex-col items-center mt-4 space-y-2 p-2">
          {examquestionlistid.map((_, index) => {
            const isLast5 = index >= examquestionlistid.length - 5;
            const isDisabled = isLast5 && !allBeforeLast5Attempted;

            return (
              <button
                key={index}
                onClick={() => {
                  if (!isDisabled) setCurrentQuestionIndex(index);
                }}
                className={`rounded-full w-10 h-10 text-sm flex items-center justify-center font-semibold border-2 ${
                  useroptionlist[index]
                    ? "bg-green-500 text-white border-green-600"
                    : "bg-gray-100 border-gray-300"
                } ${
                  index === currentQuestionIndex ? "ring-2 ring-blue-400" : ""
                } ${isDisabled ? "opacity-40 cursor-not-allowed" : ""}`}
                disabled={isDisabled}
                title={
                  isDisabled ? "Attempt all previous questions to unlock" : ""
                }
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Sidebar />
      <div className="flex min-h-screen overflow-auto pt-16">
        <div
          className={`flex-1 flex flex-col transition-all duration-300 ${
            showSidebar ? "ml-20 sm:ml-24" : "ml-0"
          }`}
        >
          <Backnav
            timer={counter}
            toggleSidebar={() => setShowSidebar(!showSidebar)}
            showsubmit={showsubmit}
            onSubmit={onSubmit}
          />
          {showsubmit ? (
            <ResultScreen />
          ) : (
            <div className="p-4">
              <p>Question{currentQuestionIndex+1}:</p>
              <SolveexamWithMathlive
                currentquestion={currentquestion}
                option={useroptionlist[currentQuestionIndex] || ""}
                setOption={(value) => handleOptionSelect(value)}
                clearOption={() => handleOptionSelect(undefined)}
              />
              <div className="mt-4 bg-slate-700 flex items-center px-4 fixed z-50 left-1 right-1 border-slate-400 bottom-0 h-12 rounded-t-3xl border-b-2 justify-between">
                <button
                  onClick={() =>
                    setCurrentQuestionIndex((prev) =>
                      prev > 0 ? prev - 1 : prev
                    )
                  }
                  className="px-4 py-2 text-white rounded"
                >
                  Previous
                </button>
                <button
                  onClick={onSubmit}
                  className="px-4 py-2  text-white rounded"
                >
                  Submit
                </button>
                <button
                  onClick={() => {
                    console.log(useroptionlist)
                    if (currentQuestionIndex === 15){
                      if (useroptionlist.filter(item => item !== undefined).length >= 15) {
                        setCurrentQuestionIndex((prev) =>
                          prev < examquestionlistid.length - 1 ? prev + 1 : prev
                        );
                      }else{
                        toast.error("Complete All questions, to get to bonus questions", {
                          position: "bottom-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        });
                      }
                    }else{
                      setCurrentQuestionIndex((prev) =>
                        prev < examquestionlistid.length - 1 ? prev + 1 : prev
                      );
                    }
                    
                  }}
                  className="px-4 py-2  text-white rounded"
                >
                  Next
                </button>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SolvePaper;
