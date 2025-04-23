import React from "react";
import { parseTextWithImages } from "./parseTextWithImages";

function SolveexamWithMathlive({
  currentquestion,
  option,
  setOption,
  clearOption,
}) {
  // Extract options dynamically from the question object
  const options = Object.entries(currentquestion || {})
    .filter(([key]) => key.startsWith("option"))
    .map(([key, value], index) => ({
      key,
      value,
      label: `op${index + 1}`,
      id: `option-${index + 1}`,
    }));

  const handleChange = (optLabel) => {
    setOption(optLabel);
    // if (onOptionChange) {
    //   onOptionChange(optLabel);
    // }
  };

  return (
    <div className="flex flex-col h-auto bg-white">
      <div className="flex-grow overflow-y-auto px-4 py-4 space-y-4">
        {/* Question */}
        <div>{parseTextWithImages(currentquestion?.question || "")}</div>

        {/* Options */}
        {options.map((opt) => (
          <div key={opt.key} className="border-2 rounded-2xl border-slate-600">
            <label
              htmlFor={opt.id}
              onClick={() => handleChange(opt.label)}
              className="flex justify-between cursor-pointer px-4 py-3 items-center"
            >
              <span>{parseTextWithImages(opt.value || "")}</span>
              <input
                type="radio"
                id={opt.id}
                name="options"
                value={opt.label}
                checked={option === opt.label}
                onChange={() => {}}
                className="radio checked:bg-blue-500 ml-4"
              />
            </label>
          </div>
        ))}
        <button className="mt-2 px-3 py-1 bg-red-200 hover:bg-red-300 text-red-800 rounded"  onClick={clearOption}>Clear Option</button>
      </div>
    </div>
  );
}

export default SolveexamWithMathlive;
