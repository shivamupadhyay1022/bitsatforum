import React, { useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';

const Instructions = () => {
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [instructionsRead, setInstructionsRead] = useState(false);
  const {id} = useParams()
  const navigate= useNavigate()

  const handleBeginTest = () => {
    if (termsAgreed && instructionsRead) {
      //  Add your logic to start the test here (e.g., redirect to test page)
      alert('Starting the test...'); // Replace with actual test start logic
      navigate(`/paper/${id}`)
    } else {
      alert('Please agree to the terms and confirm that you have read the instructions to proceed.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">BITSAT 2024 - Instructions</h1>
        <div className="space-y-4 text-gray-700 text-sm">
          <h2 className="text-lg font-semibold text-gray-800">General Instructions:</h2>
          <ul className="list-decimal list-inside space-y-2">
            <li>
              <span className="font-medium">Duration:</span> The test is of 3 hours.
            </li>
            <li>
              <span className="font-medium">Sections:</span> The paper consists of Physics, Chemistry, Mathematics, English Proficiency, and Logical Reasoning.
            </li>
            <li>
              <span className="font-medium">Total Questions:</span> There are 15 questions in total.
            </li>
            <li>
              <span className="font-medium">Marking Scheme:</span> Each correct answer carries 3 marks, and each incorrect answer carries -1 mark. No marks are awarded for unattempted questions.
            </li>
            <li>
              <span className="font-medium">Calculator:</span> Use of a virtual calculator is allowed.
            </li>
            <li>
              <span className="font-medium">Rough Work:</span> You will be provided with a scribble pad for rough work.
            </li>
            <li>
              <span className="font-medium">Important Instructions:</span>
              <ul className="list-disc list-inside space-y-1 ml-5">
                <li>Candidates should bring their Admit Card and a valid Photo-ID proof.</li>
                <li>Candidates must report to the exam hall at least 30 minutes before the commencement of the exam.</li>
                <li>Mobile phones and other electronic gadgets are strictly prohibited inside the exam hall.</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-800">Detailed Instructions:</h2>
          <ul className="list-decimal list-inside space-y-2">
            <li>
              <span className="font-medium">Question Paper Structure:</span>
              <ul className="list-disc list-inside space-y-1 ml-5">
                <li>Part I: Physics - 5 Questions</li>
                <li>Part II: Chemistry - 5 Questions</li>
                <li>Part III: Mathematics - 5 Questions</li>
                {/* <li>Part IV: English Proficiency - 15 Questions</li> */}
                {/* <li>Part V: Logical Reasoning - 15 Questions</li> */}
                <li>
                  Bonus: If a candidate answers all 15 questions, they have an option to
                  attempt 6 (Six) extra questions (without negative marking).
                  These 6 questions will be from Physics, Chemistry & Mathematics
                  only; 2 questions from each part.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Answering Questions:</span>
              <ul className="list-disc list-inside space-y-1 ml-5">
                <li>
                  Each question will have four options. Choose the option that you
                  consider the most appropriate.
                </li>
                <li>
                  To answer a question, click on the option. You can change your
                  answer by clicking on another option before submitting.
                </li>
                <li>
                  You can mark a question for review and come back to it later.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Submission:</span>
              <ul className="list-disc list-inside space-y-1 ml-5">
                <li>
                  You can submit the test only after you have answered all the
                  compulsory questions.
                </li>
                <li>
                  Ensure that you have reviewed all your answers before final
                  submission.
                </li>
                <li>
                  Once the test is submitted, you cannot make any changes.
                </li>
              </ul>
            </li>
            <li><span className="font-medium">Technical Issues:</span> In case of any technical issues, please contact the invigilator immediately.</li>
            <li><span className="font-medium">Conduct:</span> Maintain silence and decorum in the examination hall. Any malpractice will lead to disqualification.</li>
          </ul>
          <h2 className="text-lg font-semibold text-gray-800">Important Dates:</h2>
          <ul className="list-disc list-inside space-y-2 ml-5">
            <li>Registration Start Date: 10th May 2024</li>
            <li>Registration End Date: 30th June 2024</li>
            <li>Exam Dates: 15th July 2024 to 20th July 2024</li>
            <li>Admit Card Release Date: 10th July 2024</li>
          </ul>
        </div>

        {/* Checkboxes and Button */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="termsAgreement"
              className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={termsAgreed}
              onChange={(e) => setTermsAgreed(e.target.checked)}
            />
            <label htmlFor="termsAgreement" className="text-sm text-gray-700">
              I agree to the terms and conditions.
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="instructionsConfirmation"
              className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={instructionsRead}
              onChange={(e) => setInstructionsRead(e.target.checked)}
            />
            <label htmlFor="instructionsConfirmation" className="text-sm text-gray-700">
              I have read all the instructions carefully.
            </label>
          </div>
          <button
            onClick={handleBeginTest}
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2.5 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full"
            disabled={!termsAgreed || !instructionsRead}
          >
            Begin Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
