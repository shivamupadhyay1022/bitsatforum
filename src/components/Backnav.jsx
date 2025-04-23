import React, { useEffect, useState, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../supabase";

function Backnav({ title, timer, toggleSidebar, onSubmit, showsubmit }) {
  const [counter, setCounter] = useState(10); // Start as null
  const navigate = useNavigate();
  const [showdelaytext, setShowDelayedText] = useState(false);

  const {id} =useParams()

  useLayoutEffect(() => {
    setTimeout(() => {
      setShowDelayedText(true);
    }, 2000);
    if (id) {
      // console.log("Exam ID set:", id);
      fetchexam();
    }
  }, [id]);

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
        setCounter(data[0]?.Duration * 60);
        setShowDelayedText(true);
      }
    } catch (error) {
      console.log(error);
    }
  }
  // Start countdown when counter is set and > 0
  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
      return () => clearInterval(timer); // Clear timer on unmount or when counter changes
    } else {
      onSubmit(); // Trigger the function when counter hits 0
    }
  }, [counter]);
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };


  return (
    <div className="font-hind flex flex-col z-[500] justify-center text-white">
      <div className="bg-slate-700 flex items-center px-4 fixed z-50 left-1 right-1 border-slate-400 top-0 h-12 rounded-b-3xl border-b-2">
        <div className="items-center w-full justify-between flex">
          <button onClick={toggleSidebar}>Questions</button>
          <div className="flex items-center flex-row space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
              onClick={() => navigate(-2)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p>{title || "Back"}</p>
          </div>
          <div className="text-white" >{formatTime(counter)}</div>
        </div>
      </div>
    </div>
  );
}

export default Backnav;
