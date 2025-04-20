import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  useCallback,
} from "react";
import "mathlive";
import Backnav from "../components/Backnav";
import { supabase } from "../../supabase";
import Questionblockcomp from "../components/Questionblockcomp";
// import { auth, db } from "../firebase";
import { ref, get, set } from "firebase/database";
import { useParams } from "react-router-dom";

function SolvePaper() {
  const { id } = useParams();
  const [option, setOption] = useState("op0");
  const [correct, setCorrect] = useState("");
  const [showsubmit, setShowSubmit] = useState(false);
  const [correctoption, setCorrectoption] = useState("");
  const [seed, setSeed] = useState(7);
  const [seedone, setSeedOne] = useState(9);
  const [currentquestion, setCurrentQuestion] = useState();
  const [attemptedQuestions, setAttemptedQuestions] = useState([]);
  const [examquestionlistid, SetexamquestionlistidId] = useState([]);
  const [examquestionlist, Setexamquestionlist] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [exam, setExam] = useState();
  const [showdelaytext, setShowDelayedText] = useState(false);
  const [counter, setCounter] = useState(10);
  const [correctoptionlist, setCorrectOptionList] = useState([]);
  const [useroptionlist, setUserOptionList] = useState([]);
  const [score, setScore] = useState();
  const [examName, setExamName] = useState();

  useLayoutEffect(() => {
    setTimeout(() => {
      setShowDelayedText(true);
    }, 2000);
    if (id) {
      console.log("Exam ID set:", id);
      fetchexam();
    }
  }, [id]);

  useLayoutEffect(() => {
    if (examquestionlistid.length > 0) {
      console.log("Updated question list:", examquestionlistid);
      fetchQuestion(examquestionlistid[currentQuestionIndex]);
    }
  }, [examquestionlistid]);
  // Now logging examquestionlistid only when it's updated
  useLayoutEffect(() => {
    if (currentQuestionIndex > 0) {
      console.log("Updated Current question Index:", currentQuestionIndex);
      fetchQuestion(examquestionlistid[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]); // Now logging examquestionlistid only when it's updated

  useLayoutEffect(() => {
    process();
  }, []);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
      return () => clearInterval(timer); // Clear timer on unmount or when counter changes
    } else {
      handleCounterEnd(); // Trigger the function when counter hits 0
    }
  }, [counter]);

  const renderImageOrText = useCallback((content) => {
    const parts = content?.split("::::");

    return parts?.map((part, index) => {
      const isImage = index % 2 === 1;

      if (!isImage) {
        // Regular math content
        return (
          <math-field
            key={index}
            read-only
            style={{
              margin: "8px 0",
            }}
          >
            {part}
          </math-field>
        );
      }

      // Handle image content: "url::height::width"
      const [src, height, width] = part.split("::").map((p) => p.trim());

      return (
        <img
          key={index}
          src={src}
          alt={`inline-img-${index}`}
          height={height || "auto"}
          width={width || "auto"}
          style={{
            margin: "10px 0",
            maxWidth: "100%",
            height: height ? `${height}px` : "auto",
            width: width ? `${width}px` : "auto",
          }}
          loading="lazy"
        />
      );
    });
  }, []);

  const handleCounterEnd = () => {
    console.log("Counter has ended! Triggering function...");
    onSubmit();
    setShowSubmit(true);
  };

  async function fetchid() {
    var id = await window.localStorage.getItem("Exam_question_id");

    if (id !== null) {
      setid(parseInt(JSON.parse(id), 10));
    }
  }

  async function fetchQuestionList() {
    const questlist = []; // Temporary array to store the fetched questions

    for (let i = 0; i < examquestionlistid.length; i++) {
      try {
        const { data, error } = await supabase
          .from("questions")
          .select("*")
          .match({ id: examquestionlistid[i] })
          .single(); // Assuming each ID fetches a single question

        if (error) throw error;

        if (data) {
          questlist.push(data); // Push each fetched question to questlist
        }
      } catch (error) {
        console.log(error);
      }
    }

    Setexamquestionlist(questlist); // Set the state once all questions are fetched
  }

  async function process() {
    await fetchid();
  }

  async function fetchexam() {
    if (!id) return;
    try {
      const { data, error } = await supabase
        .from("exams")
        .select("*")
        .match({ id: id })
        .limit(1);
      if (error) throw error;
      if (data && data.length > 0) {
        setExam(data[0]);
        splitstring(data[0]?.Questions);
        setExamName(data[0]?.Name);
        setCounter(data[0]?.Duration * 60);
        setShowDelayedText(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function splitstring(questionlist) {
    var str_array = questionlist.split(",");
    for (var i = 0; i < str_array.length; i++) {
      // Trim the excess whitespace.
      str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
      // Add additional code here, such as:
    }
    SetexamquestionlistidId(str_array);
    // console.log(examquestionlistid)
  }

  const fetchQuestion = async (index) => {
    try {
      const { data, error } = await supabase
        .from("questions")
        .select("*")
        .match({ id: index });
      if (error) throw error;
      if (data) {
        setCurrentQuestion(...data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const calculateScore = () => {
    let score = 0;

    // Helper to normalize "option1" -> "op1"
    const normalizeCorrect = (correctKey) => correctKey.replace("option", "op");

    correctoptionlist.forEach((correctOption, index) => {
      const normalizedCorrect = normalizeCorrect(correctOption);
      if (useroptionlist[index] === normalizedCorrect) {
        score++;
      }
    });

    return score;
  };

  async function onSubmit() {
    const questlist = [];
    const score = calculateScore();
    setScore(score);

    for (let i = 0; i < examquestionlistid.length; i++) {
      try {
        const { data, error } = await supabase
          .from("questions")
          .select("*")
          .match({ id: examquestionlistid[i] })
          .single();

        if (error) throw error;

        if (data) {
          // console.log(data)
          questlist.push(data);
          if (correctoptionlist.length < examquestionlistid.length) {
            correctoptionlist.push(data.correct);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (questlist.length > 0) {
      Setexamquestionlist(questlist);
      console.log(correctoptionlist);
      console.log(useroptionlist);
    } else {
      console.error("Questlist is empty or null, skipping MathJax render.");
    }

    // Storing attempt in Realtime Database
    // const currentUser = auth.currentUser;
    // if (!currentUser) {
    //   console.error("User not authenticated");
    //   return;
    // }

    // const userId = currentUser.uid;
    // const userRef = ref(db, `users/${currentUser.uid}/attempts`);

    try {
      //   const snapshot = await get(userRef);
      //   const attempts = snapshot.exists() ? snapshot.val() : [];
      //   attempts.push({ examName, score, timestamp: new Date().toISOString() });

      //   await set(userRef, attempts);
      console.log("Test attempt recorded successfully in Realtime Database");
      setCounter("0");
    } catch (error) {
      console.error("Error updating test attempt in Realtime Database:", error);
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleOPtionsChange = () => {
    setUserOptionList((prev) => {
      const newMarkedOptions = [...prev];
      newMarkedOptions[currentQuestionIndex] = option;
      return newMarkedOptions;
    });
    setCorrectOptionList((prev) => {
      const newMarkedOptions = [...prev];
      newMarkedOptions[currentQuestionIndex] = currentquestion?.correct;
      return newMarkedOptions;
    });
    console.log(useroptionlist);
    console.log(correctoptionlist);
  };

  const ResultScreen = () => {
    const percentage = ((score / examquestionlistid.length) * 100).toFixed(2);

    return (
      <div className="flex flex-col items-center justify-center ">
        <div className="p-8 rounded-xl shadow-2xl text-center text-gray-800 w-[90%] sm:w-[400px]">
          <h1 className="text-3xl font-bold text-blue-600">Quiz Results </h1>
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

          <div className="mt-8 space-y-4">
            <button
              className="px-6 py-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md"
              onClick={() => window.location.reload()}
            >
              Retake Quiz
            </button>
            {/* <button
            className="px-6 py-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md"
            onClick={() => alert("Sharing is not implemented yet!")}
          >
            Share Results
          </button> */}
          </div>
        </div>
      </div>
    );
  };

  const SubmitBlock = () => {
    if (examquestionlist) {
      return (
        <div>
          <div className="mx-8">
            <div className="my-20">
              <ResultScreen />
              {examquestionlist.map((item, index) => (
                <Questionblockcomp
                  key={index}
                  item={item}
                  marked={useroptionlist[index]}
                  correct={correctoptionlist[index]}
                /> // Adjust based on your data structure
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      {!showdelaytext ? (
        <div className="absolute top-[40%] right-[40%] transform -translate-x-1/2 -translate-y-1/2 spinner md:top-1/2 md:left-1/2">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col justify-center text-white ">
            <Backnav timer={formatTime(counter)} />
            <div key={seedone} className="overflow-x-auto mt-20 self-center">
              <ul className="steps">
                {examquestionlistid.map((question, index) => (
                  <li
                    key={index}
                    className={`step ${
                      attemptedQuestions.includes(index)
                        ? "step-accent"
                        : " step-neutral"
                    }`}
                  ></li>
                ))}
              </ul>
            </div>

            {/* quetsion block */}
            {!showsubmit && (
              <div className="flex flex-col overflow-hidden pb-20 space-y-4 mx-4">
                {/* QUESTION BLOCK */}
                <div className="flex flex-col space-y-4">
                  <div className="p-2 overflow-hidden max-w-full w-full">
                    <div className="w-full max-w-full break-words overflow-hidden">
                      {renderImageOrText(currentquestion?.question)}
                    </div>
                  </div>

                  {[1, 2, 3, 4].map((num) => (
                    <div
                      key={num}
                      className="border-2 rounded-2xl border-slate-600 overflow-hidden"
                    >
                      <label
                        onClick={() => {
                          setOption(`op${num}`);
                          const updatedOptions = [...useroptionlist];
                          updatedOptions[currentQuestionIndex] = `op${num}`;
                          setUserOptionList(updatedOptions);
                          setAttemptedQuestions((prevItems) => [
                            ...prevItems,
                            currentQuestionIndex,
                          ]);
                          setSeedOne(Math.random());
                        }}
                        className="label cursor-pointer p-1 px-4 flex justify-between items-center w-full"
                      >
                        <span className="label-text break-words max-w-full w-full overflow-hidden">
                          <div className="w-full max-w-full overflow-hidden">
                            {renderImageOrText(
                              currentquestion?.[`option${num}`]
                            )}
                          </div>
                        </span>
                        <input
                          type="radio"
                          name={`radio-${currentQuestionIndex}`}
                          checked={
                            useroptionlist[currentQuestionIndex] === `op${num}`
                          }
                          className="radio checked:bg-blue-500 ml-4"
                        />
                      </label>
                    </div>
                  ))}
                </div>

                {/* FOOTER */}
                <footer className="font-hind flex flex-col z-50 justify-center">
                  <div className="bg-slate-700 flex items-center justify-between mx-1 px-4 border-slate-400 fixed inset-x-0 bottom-0 h-12 rounded-t-3xl border-t-2">
                    {/* PREVIOUS BUTTON */}
                    {currentQuestionIndex > 0 ? (
                      <button
                        className="flex items-center space-x-4"
                        onClick={() => {
                          if (currentQuestionIndex > 0) {
                            setCurrentQuestionIndex(currentQuestionIndex - 1);
                          }
                          setSeed(Math.random());
                          handleOPtionsChange();
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                          />
                        </svg>
                        <p>Prev</p>
                      </button>
                    ) : (
                      <div />
                    )}

                    {/* NEXT BUTTON */}
                    {currentQuestionIndex < examquestionlistid.length - 1 ? (
                      <button
                        className="flex items-center space-x-4"
                        onClick={() => {
                          if (
                            currentQuestionIndex < examquestionlistid.length
                          ) {
                            setCurrentQuestionIndex(currentQuestionIndex + 1);
                          }
                          setSeed(Math.random());
                          handleOPtionsChange();
                        }}
                      >
                        <p>Next</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </button>
                    ) : (
                      <div />
                    )}

                    {/* SUBMIT BUTTON */}
                    <button
                      onClick={() => {
                        setShowSubmit((prev) => !prev);
                        onSubmit();
                      }}
                      className="bg-slate-900 rounded-lg border-slate-400 absolute bottom-[0.1] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 h-[35px] w-[145px] flex justify-center items-center"
                    >
                      <p>Submit</p>
                    </button>
                  </div>
                </footer>
              </div>
            )}

            {/* submit block */}
            {!showsubmit || <SubmitBlock />}
          </div>
        </div>
      )}
    </div>
  );
}

export default SolvePaper;
