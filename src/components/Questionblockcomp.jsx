import React, { useCallback } from "react";
import "mathlive";

// SVG Icons
const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="red"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const TickIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="green"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const Questionblockcomp = ({ item, marked, correct }) => {
  const options = [item?.option1, item?.option2, item?.option3, item?.option4];

  const renderIcon = (optionKey) => {
    // Function to map "option1" -> "op1"
    const normalizeCorrect = (correctKey) => correctKey.replace("option", "op");

    const normalizedCorrect = normalizeCorrect(correct);
    const isMarked = marked === optionKey;
    const isCorrect = normalizedCorrect === optionKey;
    console.log(normalizedCorrect);

    if (isMarked && isCorrect) {
      return <TickIcon />;
    } else if (isMarked && !isCorrect) {
      return <CrossIcon />;
    }

    return null; // Don't render anything if not marked
  };

  const determineBorderColor = (optionKey) => {
    const options = [item?.option1, item?.option2, item?.option3, item?.option4];

      // Function to map "option1" -> "op1"
      const normalizeCorrect = (correctKey) => correctKey.replace("option", "op");
  
      const normalizedCorrect = normalizeCorrect(correct);
      const isMarked = marked === optionKey;
      const isCorrect = normalizedCorrect === optionKey;

    if (isCorrect && isMarked) {
      return "border-green-500"; // Correct and marked
    } else if (isMarked) {
      return "border-red-500"; // Marked but wrong
    } else if (isCorrect) {
      return "border-green-600"; // Correct but not marked
    }
    return "border-slate-600"; // Default border for unmarked options
  };

  const renderImageOrText = useCallback((content) => {
    const parts = content.split("::::");

    return parts.map((part, index) => {
      const isImage = index % 2 === 1;

      if (!isImage) {
        // Regular math content
        return (
          <math-field
            key={index}
            read-only
            style={{
              backgroundColor: "inherit",
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

  return (
    <div>
      {/* Question Block */}
      <div className="py-2 space-y-4 mx-4">
        <p className="p-2 flex-shrink overflow-wrap break-words">{renderImageOrText(item?.question)}</p>

        {options.map((option, index) => {
          const optionKey = `op${index + 1}`; // 'op1', 'op2', etc.
          const borderColor = determineBorderColor(optionKey); // Get the border color for this option

          return (
            <div key={index} className={`border-2 rounded-2xl ${borderColor}`}>
              <label className="label justify-between px-4 p-1 flex items-center">
                <span className="label-text text-black">
                  <p>
                    Option {index + 1}: {renderImageOrText(option)}
                  </p>
                </span>
                {renderIcon(optionKey)}
                {/* <TickIcon /> */}
                {/* Render the appropriate icon */}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Questionblockcomp;
